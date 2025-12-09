import React, { useState } from 'react';
import { AlertCircle, CheckCircle, HelpCircle, Target, BookOpen, Brain, Video, FileText, Code, Book, Clock } from 'lucide-react';

const ConceptDependencyMapper = () => {
  const [concept, setConcept] = useState('');
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('undergraduate');
  const [loading, setLoading] = useState(false);
  const [tree, setTree] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizResults, setQuizResults] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [studyResources, setStudyResources] = useState({});
  const [loadingResources, setLoadingResources] = useState(false);

  const generateTree = async () => {
    if (!concept.trim()) return;
    
    setLoading(true);
    setTree(null);
    setQuizResults({});
    setShowResults(false);
    
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `Generate a prerequisite knowledge tree for understanding "${concept}" at ${level} level${subject ? ` in ${subject}` : ''}.

Return ONLY valid JSON (no markdown, no preamble) with this exact structure:
{
  "target": "concept name",
  "prerequisites": [
    {
      "id": 1,
      "name": "concept name",
      "description": "brief description",
      "prerequisites": [array of prerequisite IDs],
      "level": "foundational|intermediate|advanced"
    }
  ]
}

Include 5-8 prerequisite concepts arranged in a logical dependency hierarchy. The target concept should be the last item with the highest ID.`
          }]
        })
      });

      const data = await response.json();
      const content = data.content[0].text;
      
      // Parse JSON, removing any markdown formatting
      const cleanJson = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const treeData = JSON.parse(cleanJson);
      
      setTree(treeData);
    } catch (error) {
      console.error('Error generating tree:', error);
      alert('Failed to generate tree. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const startQuiz = async (node) => {
    setSelectedNode(node);
    setLoading(true);
    
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `Generate 3 multiple choice questions to test understanding of "${node.name}": ${node.description}

Return ONLY valid JSON (no markdown, no preamble) with this exact structure:
{
  "questions": [
    {
      "question": "question text",
      "options": ["A) option1", "B) option2", "C) option3", "D) option4"],
      "correct": 0
    }
  ]
}

Where "correct" is the index (0-3) of the correct answer. Make questions appropriate for ${level} level.`
          }]
        })
      });

      const data = await response.json();
      const content = data.content[0].text;
      const cleanJson = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const quizData = JSON.parse(cleanJson);
      
      setCurrentQuiz({ ...quizData, nodeId: node.id, currentQ: 0, answers: [] });
      setQuizMode(true);
    } catch (error) {
      console.error('Error generating quiz:', error);
      alert('Failed to generate quiz. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const answerQuestion = (answerIndex) => {
    const q = currentQuiz.questions[currentQuiz.currentQ];
    const isCorrect = answerIndex === q.correct;
    
    const newAnswers = [...currentQuiz.answers, isCorrect];
    
    if (currentQuiz.currentQ < currentQuiz.questions.length - 1) {
      setCurrentQuiz({ ...currentQuiz, currentQ: currentQuiz.currentQ + 1, answers: newAnswers });
    } else {
      // Quiz complete
      const score = newAnswers.filter(a => a).length;
      const passed = score >= 2; // Need 2/3 correct
      
      setQuizResults({
        ...quizResults,
        [currentQuiz.nodeId]: passed
      });
      setQuizMode(false);
      setCurrentQuiz(null);
    }
  };

  const generateStudyResources = async (node) => {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `Generate study resources for learning "${node.name}" (${node.description}) at ${level} level.

Return ONLY valid JSON (no markdown, no preamble) with this exact structure:
{
  "resources": [
    {
      "type": "video|article|interactive|textbook|practice",
      "title": "resource title",
      "description": "why this is helpful",
      "platform": "Khan Academy|YouTube|Coursera|etc",
      "estimatedTime": "15 minutes|2 hours|etc"
    }
  ],
  "keyTopics": ["topic1", "topic2", "topic3"],
  "studyTips": "2-3 sentence study tip specific to this concept"
}

Include 4-5 diverse, real resources that actually exist. Be specific with titles and platforms.`
          }]
        })
      });

      const data = await response.json();
      const content = data.content[0].text;
      const cleanJson = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const resourceData = JSON.parse(cleanJson);
      
      setStudyResources(prev => ({
        ...prev,
        [node.id]: resourceData
      }));
    } catch (error) {
      console.error('Error generating resources:', error);
    }
  };

  const finishAssessment = async () => {
    setShowResults(true);
    
    // Get failed concepts
    const failedConcepts = tree.prerequisites.filter(p => quizResults[p.id] === false);
    
    if (failedConcepts.length > 0) {
      setLoadingResources(true);
      
      // Generate resources for each failed concept
      for (const concept of failedConcepts) {
        await generateStudyResources(concept);
      }
      
      setLoadingResources(false);
    }
  };

  const getNodeStatus = (nodeId) => {
    if (quizResults[nodeId] === true) return 'passed';
    if (quizResults[nodeId] === false) return 'failed';
    return 'untested';
  };

  const getLearningPath = () => {
    if (!tree) return [];
    
    const failed = tree.prerequisites.filter(p => quizResults[p.id] === false);
    const untested = tree.prerequisites.filter(p => quizResults[p.id] === undefined);
    
    // Find root causes - failed nodes with no failed prerequisites
    const rootGaps = failed.filter(node => {
      return !node.prerequisites.some(preqId => quizResults[preqId] === false);
    });
    
    return rootGaps.length > 0 ? rootGaps : failed;
  };

  const renderNode = (node, depth = 0) => {
    const status = getNodeStatus(node.id);
    const hasQuiz = quizResults[node.id] !== undefined;
    
    let bgColor = 'bg-gray-100 border-gray-300';
    let icon = <HelpCircle className="w-5 h-5 text-gray-500" />;
    
    if (status === 'passed') {
      bgColor = 'bg-green-100 border-green-400';
      icon = <CheckCircle className="w-5 h-5 text-green-600" />;
    } else if (status === 'failed') {
      bgColor = 'bg-red-100 border-red-400';
      icon = <AlertCircle className="w-5 h-5 text-red-600" />;
    }
    
    return (
      <div key={node.id} className="mb-4" style={{ marginLeft: `${depth * 24}px` }}>
        <div className={`border-2 rounded-lg p-4 ${bgColor} transition-all`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {icon}
                <h3 className="font-semibold text-gray-900">{node.name}</h3>
                <span className="text-xs px-2 py-1 rounded bg-white bg-opacity-50">
                  {node.level}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{node.description}</p>
            </div>
            {!showResults && (
              <button
                onClick={() => startQuiz(node)}
                disabled={loading}
                className="ml-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm whitespace-nowrap disabled:opacity-50"
              >
                {hasQuiz ? 'Retake Quiz' : 'Test Knowledge'}
              </button>
            )}
          </div>
        </div>
        
        {/* Render prerequisite nodes */}
        {node.prerequisites && node.prerequisites.length > 0 && (
          <div className="ml-6 mt-2 border-l-2 border-gray-300 pl-4">
            {node.prerequisites.map(preqId => {
              const preqNode = tree.prerequisites.find(p => p.id === preqId);
              return preqNode ? renderNode(preqNode, depth + 1) : null;
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Brain className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Concept Dependency Mapper</h1>
          </div>
          <p className="text-gray-600">Discover what you need to learn first</p>
        </div>

        {!tree && !loading && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What concept are you struggling with?
                </label>
                <input
                  type="text"
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  placeholder="e.g., Neural Networks, Quantum Mechanics, Calculus"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject (optional)
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g., Computer Science, Physics"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="high school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
              </div>

              <button
                onClick={generateTree}
                disabled={!concept.trim()}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Generate Knowledge Tree
              </button>
            </div>
          </div>
        )}

        {loading && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Analyzing concept dependencies...</p>
          </div>
        )}

        {tree && !quizMode && !showResults && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">Target Concept: {tree.target}</h2>
              </div>
              <p className="text-gray-600 mb-4">Click "Test Knowledge" on each concept to assess your understanding</p>
              
              <div className="flex gap-4 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border-2 border-green-400 rounded"></div>
                  <span>Understood</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-100 border-2 border-red-400 rounded"></div>
                  <span>Needs Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 border-2 border-gray-300 rounded"></div>
                  <span>Not Tested</span>
                </div>
              </div>

              {tree.prerequisites.map(node => {
                // Only render top-level nodes (target concept and nodes with no prerequisites in other nodes)
                const isTopLevel = node.id === tree.prerequisites[tree.prerequisites.length - 1].id ||
                  !tree.prerequisites.some(p => p.prerequisites.includes(node.id));
                
                if (isTopLevel) {
                  return renderNode(node);
                }
                return null;
              })}

              {Object.keys(quizResults).length > 0 && (
                <button
                  onClick={finishAssessment}
                  className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
                >
                  View Learning Path
                </button>
              )}
            </div>

            <button
              onClick={() => {
                setTree(null);
                setConcept('');
                setQuizResults({});
              }}
              className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Start Over
            </button>
          </div>
        )}

        {quizMode && currentQuiz && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Testing: {selectedNode.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Question {currentQuiz.currentQ + 1} of {currentQuiz.questions.length}
            </p>

            <div className="mb-8">
              <p className="text-lg text-gray-800 mb-4">
                {currentQuiz.questions[currentQuiz.currentQ].question}
              </p>
              <div className="space-y-3">
                {currentQuiz.questions[currentQuiz.currentQ].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => answerQuestion(idx)}
                    className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {showResults && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900">Your Personalized Learning Path</h2>
            </div>

            {getLearningPath().length === 0 ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Great Job!</h3>
                <p className="text-gray-600">You have a solid understanding of the prerequisites. Keep learning!</p>
              </div>
            ) : (
              <div>
                <p className="text-gray-700 mb-6">
                  Based on your assessment, focus on these concepts first to build a strong foundation:
                </p>
                
                {loadingResources && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                    <div className="animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                    <p className="text-blue-800">Generating personalized study resources...</p>
                  </div>
                )}
                
                <div className="space-y-6">
                  {getLearningPath().map((node, idx) => {
                    const resources = studyResources[node.id];
                    const resourceIcons = {
                      video: <Video className="w-4 h-4" />,
                      article: <FileText className="w-4 h-4" />,
                      interactive: <Code className="w-4 h-4" />,
                      textbook: <Book className="w-4 h-4" />,
                      practice: <Brain className="w-4 h-4" />
                    };
                    
                    return (
                      <div key={node.id} className="border-2 border-indigo-200 bg-white rounded-lg overflow-hidden">
                        <div className="bg-indigo-50 p-4 border-b border-indigo-200">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 mb-1">{node.name}</h3>
                              <p className="text-sm text-gray-700 mb-2">{node.description}</p>
                              <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                                {node.level}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {resources && (
                          <div className="p-4">
                            {resources.studyTips && (
                              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                                <p className="text-sm text-gray-700">
                                  <strong>💡 Study Tip:</strong> {resources.studyTips}
                                </p>
                              </div>
                            )}
                            
                            {resources.keyTopics && resources.keyTopics.length > 0 && (
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Topics to Focus On:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {resources.keyTopics.map((topic, i) => (
                                    <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">📚 Recommended Resources:</h4>
                            <div className="space-y-3">
                              {resources.resources.map((resource, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 text-indigo-600 mt-1">
                                      {resourceIcons[resource.type] || <BookOpen className="w-4 h-4" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-2 mb-1">
                                        <h5 className="font-medium text-gray-900 text-sm">{resource.title}</h5>
                                        <span className="flex-shrink-0 text-xs text-gray-500 flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          {resource.estimatedTime}
                                        </span>
                                      </div>
                                      <p className="text-xs text-gray-600 mb-1">{resource.description}</p>
                                      <span className="text-xs font-medium text-indigo-600">{resource.platform}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Next Steps:</strong> Master these concepts in order, then retake the quizzes for concepts that depend on them. Your understanding will improve as you build from the foundation up!
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setTree(null);
                setConcept('');
                setQuizResults({});
                setShowResults(false);
                setStudyResources({});
              }}
              className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
            >
              Map Another Concept
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConceptDependencyMapper;
import { GitBranch, Brain, Zap } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import personalizedLearning from '../assets/personalized_learning.svg'
import aiAssessments from '../assets/ai_assessments.svg'
import knowledgeTrees from '../assets/knowledge_trees.svg'


const Features = () => {
  const features = [
    {
      icon: <GitBranch size={40} className="text-primary" />,
      title: 'Visual Knowledge Trees',
      description: 'See exactly what you need to learn first. Our AI maps out prerequisite concepts in an interactive dependency tree, showing you the complete learning path at a glance.',
      image: knowledgeTrees,
    },
    {
      icon: <Brain size={40} className="text-secondary" />,
      title: 'AI-Powered Assessments',
      description: 'Quick 3-question quizzes identify your exact knowledge gaps. Test your understanding of each concept and instantly know which foundations need work.',
      image: aiAssessments,
    },
    {
      icon: <Zap size={40} className="text-primary" />,
      title: 'Personalized Learning Paths',
      description: 'Get curated resources tailored to your level. From videos to articles to interactive tools—every recommendation is matched to help you fill gaps efficiently.',
      image: personalizedLearning,
    }
  ]

  return (
    <Section className="features mt-20">
      <div className="container w-full">
        <div className="header-content flex flex-col items-center mb-12">
          <h2 className="text-center">What makes Vertex work</h2>
          <p className="body-text text-center text-gray-300 mt-2">
            Three powerful tools working together to transform how you learn.
            Identify knowledge gaps, validate your understanding, and follow a
            personalized roadmap to mastery.
          </p>
        </div>

        <div className="features-content grid md:grid-cols-2 md:grid-rows-2 gap-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              {...feature}
              className={`feature ${index===0 ? 'md:row-span-2 flex-col' :'flex-col md:flex-row'}` }
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Features
import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import { BsFolder2Open } from 'react-icons/bs'

import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Smart Contract Developer at Uhuruverse',
    location: 'Lagos, Nigeria',
    description:
      'I worked as a smart contract developer for 1 year and 6 months developing and deploying smart contracts',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Frontend Developer at Eclat',
    location: 'Lagos, Nigeria',
    description:
      'Collaborated with cross-functional teams to translate design concepts into functional and visually appealing frontend solutions',
    icon: React.createElement(FaReact),
    date: '2023',
  },
  {
    title: 'Chief Technology Officer at Dsacorp',
    location: 'Lagos, Nigeria',
    description:
      "I'm working currently at Dsacorp as the CTO, crafting innovative blockchain solutions",
    icon: React.createElement(CgWorkAlt),
    date: 'Present',
  },
  {
    title: 'Chainlink Hackathon: Crowdfunding',
    location: 'Lagos, Nigeria',
    description:
      'Participated solo in the chainlink hackathon where i developed smart contracts and seamlessly integrating chainlink oracle nodes ',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Celo Hackathon: Decentralized Collaboration',
    location: 'Lagos, Nigeria',
    description:
      'Participated in the Celo Hackathon where i worked with a team to implement a decentalized project management platform',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Aya/Base Hackathon: Decentralized Contribution',
    location: 'Lagos, Nigeria',
    description:
      'Participated in the Base Hackathon where i developed smart contracts that implemented a unique contribution and collaboration mechanism ',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Hedera Hackathon: Crowdfunding',
    location: 'Lagos, Nigeria',
    description:
      'Participated in the Hedera Hackathon where i developed smart contracts that enabled seamless crowd funding',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Polygon Hackathon: Decentralized Education',
    location: 'Lagos, Nigeria',
    description:
      'Participated in the Polygon Hackathon where i developed a decentralized content management and reward system',
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
] as const

export const projectsData = [
  {
    title: 'Mchango',
    description:
      'I worked as a smart contract developer on this decentalized project. Users can participate in group saving in an immutable and trustless way.',
    tags: ['Solidity', 'Next.js', 'Ethers.js', 'Javascript'],
    imageUrl: React.createElement(BsFolder2Open),
  },
  {
    title: 'Decolab',
    description:
      'A decentralized project that allows users to collaborate and manage projects seamlessly. Users can create, edit and fund projects in an immutable and trustless manner',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Solidity', 'IPFS'],
    imageUrl: React.createElement(BsFolder2Open),
  },
  {
    title: 'Circuit',
    description:
      'A decentralized autonomous organization. This project allows users to participate in decentralized governance, create proposals and vote on proposals ',
    tags: [
      'React',
      'Next.js',
      'Solidity',
      'Tailwind',
      'Framer',
      'Ethers.js',
      'IPFS',
      'Javascript',
      'TypeScript',
    ],
    imageUrl: React.createElement(BsFolder2Open),
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Solidity',
  'Rust',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Ethers.js',
  'Hashgraph',
  'Hyper Ledger',
  'Python',
  'Hardhat',
  'Truffle',
  'Framer Motion',
] as const

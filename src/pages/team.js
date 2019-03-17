import React from "react"
import { Flex, Box, Card, Image, Text } from "rebass"
import {
  FaGithub,
  FaTwitter,
} from "react-icons/fa"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styles from '../styles/team.module.css'

const TeamMember = ({name, thumb, github, twitter}) => (
  <Box
    width={[1/2, 1/4]}
    p={[2, 3]}
  >
    <Card
      p={[1, 2]}
      variant='basic'
      boxShadow='0 0 8px 1px rgba(0, 0, 0, 0.2)'
    >
      <Image
        src={thumb}
        borderRadius={2}
      />
      <Text style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: 'center'}}>
        {name}
      </Text>
      <Flex justifyContent="center" className={styles['social']}>
        <Box py={[1, 2]} px={[2, 3]}>
          <a href={`https://twitter.com/${twitter}`}>
            <FaTwitter />
          </a>
        </Box>
        <Box py={[1, 2]} px={[2, 3]}>
          <a href={`https://github.com/${github}`}>
            <FaGithub />
          </a>
        </Box>
      </Flex>
    </Card>
  </Box>
)

const Team = ({location}) => (
  <Layout location={location}>
    <SEO title="Team" />
    <Box pt={2} px={[1, 2, 3]}>
      <h1>
        Team
      </h1>
    </Box>
    <Flex flexWrap='wrap' mb={6}>
      <TeamMember
        name="Sudhakar Verma"
        thumb="https://github.com/sudhackar.png"
        twitter="_sudhackar"
        github="sudhackar"
      />
      <TeamMember
        name="Krishna Chaitanya Bommakanti"
        thumb="https://github.com/chaitan94.png"
        twitter="chaitan94"
        github="chaitan94"
      />
      <TeamMember
        name="Harsh Mohan"
        thumb="https://github.com/f1recracker.png"
        twitter="f1recracker_"
        github="f1recracker"
      />
      <TeamMember
        name="Himanshu Dogra"
        thumb="https://github.com/Iam5ud0.png"
        twitter="Iam5ud0"
        github="Iam5ud0"
      />
      <TeamMember
        name="Kunal Gupta"
        thumb="https://github.com/iamKunal.png"
        twitter="assaxor"
        github="iamKunal"
      />
      <TeamMember
        name="Bhor Verma"
        thumb="https://github.com/k3dves.png"
        twitter="k3dves"
        github="k3dves"
      />
      <TeamMember
        name="Siddharth Prasad"
        thumb="https://github.com/sidsprasad.png"
        twitter="sidsprasad"
        github="sidsprasad"
      />
      <TeamMember
        name="Abhishek Kumar"
        thumb="https://github.com/kumarabd.png"
        twitter="abd_kumar"
        github="kumarabd"
      />
    </Flex>
  </Layout>
)

export default Team

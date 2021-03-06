import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.abilitiesYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    abilitiesYaml(generatedId: { eq: $generatedId }) {
      name
      description
      index
    }
  }
`

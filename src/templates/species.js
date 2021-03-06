import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.speciesYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    speciesYaml(generatedId: { eq: $generatedId }) {
      name
      player
      index
    }
  }
`

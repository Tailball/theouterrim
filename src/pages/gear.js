import React from "react"
import { graphql } from "gatsby"

import Dashboard from "../components/shared/Dashboard"
import { gearColumns } from "../components/Gear"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function Gear({ data }) {
  return (
    <Dashboard>
      <SEO title="Gear" />
      <Table
        title="Gear"
        columns={gearColumns}
        data={data.allGearYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query GearPageQuery {
    allGearYaml {
      edges {
        node {
          name
          category
          price
          rarity
          encumbrance
          index
          generatedId
        }
      }
    }
  }
`

import { Button, Card, EnsSVG, Heading, Typography } from '@ensdomains/thorin'
import { NextSeo } from 'next-seo'
import styled, { css } from 'styled-components'

import { ConnectButton } from '@/components/ConnectButton'

import { Container, Layout } from '@/components/templates'
import Hero from "../components/Hero";
import Form from "../components/form";

export default function Home() {
  return (
    <>
    
      <NextSeo title="Home" />

      <Layout>
        {/* Placeholder for the header */}
        <header />
        <div className="flex justify-between w-full  items-center relative z-10 px-2 mb-2 sm:px-10 ">
        <div className="flex"><SvgWrapper>
            <EnsSVG />
          </SvgWrapper></div>
        <div className="flex"><ConnectButton /></div>
        </div>

        
        

        {/* Main content */}
         {/* <SvgWrapper>
            <EnsSVG />
          </SvgWrapper>*/}
          
             
          <Hero/>
          <Form/>
          <Container as="main" $variant="flexVerticalCenter" $width="large">
         {/*<ExamplesGrid>
            <Card title="Name/Address Input">
              <Typography color="textSecondary">
                Every address input should also accept ENS names.
              </Typography>

             

              <Button as="a" href="/input">
                View
              </Button>
            </Card>
          </ExamplesGrid>*/ } 
        </Container>

        {/* Placeholder for the footer */}
        <footer />
      </Layout>
    </>
  )
}

const SvgWrapper = styled.div(
  ({ theme }) => css`
    --size: ${theme.space['16']};
    width: var(--size);
    height: var(--size);

    svg {
      width: 100%;
      height: 100%;
    }
  `
)

const ExamplesGrid = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: grid;
    gap: ${theme.space['4']};
    grid-template-columns: repeat(auto-fit, minmax(${theme.space['64']}, 1fr));
  `
)

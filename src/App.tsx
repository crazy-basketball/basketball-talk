import { useState } from "react"
import { Flex, Text, Button, Box, Card, Avatar } from "@radix-ui/themes"
import "./App.css"
import { Button as StdButton } from "./components/Button"

function App() {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="2" direction={"column"}>
          <Flex gap="3" align="center">
            <Avatar size="3" fallback="T" />
            <Box>
              <Text as="div" size="2" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" size="2" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
          <StdButton size={"2"} loading={loading} onClick={handleClick}>
            Styled with Radix
          </StdButton>
          <Button size={"2"}>Radix</Button>
        </Flex>
      </Card>
    </Box>
  )
}

export default App

import { css } from "styled-system/css";
import { Flex } from "styled-system/jsx";
import { Button } from "~/components/Button";
export default function Test() {
  return (
    <>
      <Flex flexDir="column" gap="24px">
        <svg className={css({ fill: "figma.Blue500" })} />
        <Button visual="primaryFilled" size="medium">
          안녕
        </Button>
        <Button visual="dangerGhostFilled" size="medium">
          안녕
        </Button>
        <div className={css({ animation: "pingpong 1s" })}>안녕</div>
      </Flex>
    </>
  );
}

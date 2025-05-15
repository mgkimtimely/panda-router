import ButtonComponent from "~/components/Button";

export default function Test() {
  return (
    <>
      <ButtonComponent theme="primaryFilled" size="large">
        wefwefwefwef
      </ButtonComponent>

      <ButtonComponent theme="dangerFilled" size={"medium"}>
        wefwefwefwef
      </ButtonComponent>

      <ButtonComponent theme="primaryGhostFilled" size={"small"}>
        wefwefwefwef
      </ButtonComponent>

      <ButtonComponent theme="whiteFilled" size={"large"}>
        wefwefwefwef
      </ButtonComponent>

      <ButtonComponent theme="grayScaleFilled" size={"large"}>
        wefwefwefwef
      </ButtonComponent>
    </>
  );
}

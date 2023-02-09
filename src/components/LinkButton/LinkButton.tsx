import type { ButtonProps } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

type Props = ButtonProps & { href: string };
function LinkButton(props: PropsWithChildren<Props>) {
  const { href, children, ...rest } = props;
  const { push } = useRouter();
  return (
    <Button {...rest} onClick={() => push(href)}>
      {children}
    </Button>
  );
}

export default LinkButton;

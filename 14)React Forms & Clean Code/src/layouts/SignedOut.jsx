import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button primary onClick={props.signIn}>
          Giriş Yap
        </Button>
        <Button primary style={{ marginLeft: 10 }}>
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}

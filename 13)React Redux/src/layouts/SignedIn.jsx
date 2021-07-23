import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp3.licdn.com/dms/image/C4D03AQFVhvxSauTyTQ/profile-displayphoto-shrink_200_200/0/1626621963148?e=1632355200&v=beta&t=eOKrjPffetKH3ETfe9V7Kgw1KN8ZowZg9ScD_vdgWoM"
        />
        <Dropdown pointing="top right" text="Melih">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={signOut}
              text="Çıkış yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

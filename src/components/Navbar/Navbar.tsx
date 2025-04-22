import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {
  Briefcase,
  Folder,
  Home2,
  InfoCircle,
  MessageProgramming,
} from "iconsax-reactjs";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";

// import { siteConfig } from "@/config/site";

const Navbar = () => {
  const siteConfig = {
    navItems: [
      {
        label: <Home2 color="white" size="28" />,
        href: "/",
      },
      {
        label: <Folder color="white" size="28" />,
        href: "/",
      },
      {
        label: <InfoCircle color="white" size="28" />,
        href: "/",
      },
      {
        label: <Briefcase color="white" size="28" />,
        href: "/",
      },
      {
        label: <MessageProgramming color="white" size="28" />,
        href: "/",
      },
    ],
  };

  return (
    <HeroUINavbar
      className="justify-center items-center"
      classNames={{ content: "w-full" }}
    >
      <NavbarContent
        className="mt-12 flex justify-center items-center"
        justify="center"
      >
        <Card>
          <CardBody className="flex flex-row gap-8">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} className="rounded-lg">
                <Button
                  isIconOnly
                  className="cursor-pointer bg-transparent hover:bg-purple-500 rounded-lg p-2 transition-background"
                >
                  {item.label}
                </Button>
              </NavbarItem>
            ))}
          </CardBody>
        </Card>
      </NavbarContent>
    </HeroUINavbar>
  );
};

export default Navbar;

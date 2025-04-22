import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import bachImg from "@/assets/images/bach.png";

const HeroSection = () => {
  return (
    <div className="mt-28">
      <div className="gap-5 flex flex-col items-center">
        <div className="flex justify-center w-5/6 md:w-1/2 lg:w-1/4">
          <Card className="flex-1">
            <CardHeader className="flex gap-3 justify-center">
              <Image
                alt="Bach"
                className="brightness-100"
                src={bachImg}
                width={330}
              />
            </CardHeader>
            <CardBody className="text-center flex flex-col gap-2 items-center pb-8">
              <p className="text-3xl font-black">Le Cong Bach</p>
              <p className="text-md font-light whitespace-pre">
                {`Frontend Developer`}
              </p>
              <p className="text-md font-light">Ha Noi, Vietnam</p>

              <div className="flex gap-4 pt-2 pb-7">
                <Button isIconOnly>
                  <EnvelopeSimple size={32} />
                </Button>
                <Button isIconOnly>
                  <LinkedinLogo size={32} />
                </Button>
                <Button isIconOnly>
                  <GithubLogo size={32} />
                </Button>
              </div>

              <Button className="w-1/3 place-items-end bg-purple-500 font-bold">
                Contact Me
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* <div className="col-span-4">
          <div className="flex flex-col gap-2">
            <p className="text-6xl font-bold">
              Transforming Your Ideas into Reality
            </p>
            <p className="text-md font-light">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted
              products.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;

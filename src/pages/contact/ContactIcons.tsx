import { useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";
import { Icon } from "@/components";

const data = [
  { icon: "gmail", href: `mailto:${process.env.EMAIL}` },
  { icon: "linkedin", href: "https://www.linkedin.com/in/r0b-adams" },
  { icon: "github", href: "https://github.com/r0b-adams" },
];

interface Props {
  showCopyEmail: () => void;
}

export const ContactIcons: React.FC<Props> = ({ showCopyEmail }) => {
  const [trail, animation] = useTrail(data.length, () => ({
    scale: 0,
  }));

  useEffect(() => {
    animation.start({ scale: 1 });
  }, []);

  const handleMouseEnter = () => {
    showCopyEmail();
  };

  return (
    <ul id="icons" className="flex space-x-10">
      {trail.map((style, idx) => {
        const { icon, href } = data[idx];

        if (icon === "gmail") {
          return (
            <animated.li key={idx} style={style} onMouseEnter={handleMouseEnter}>
              <a href={href}>
                <Icon icon={data[idx].icon} size={52} className="xl:hover:scale-125 duration-100" />
              </a>
            </animated.li>
          );
        }

        return (
          <animated.li key={idx} style={style}>
            <a href={data[idx].href} target="_blank" rel="noopener noreferrer">
              <Icon icon={data[idx].icon} size={52} className="xl:hover:scale-125 duration-100" />
            </a>
          </animated.li>
        );
      })}
    </ul>
  );
};

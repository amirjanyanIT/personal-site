import { NavigatorInterface, SectionInterface } from "./types";

export const Navigator = (props: NavigatorInterface) => {
  const { logo, sections } = props;

  const onSectionLabelClick = (section: SectionInterface) => {};

  return (
    <div className="navigator">
      <div className="navigator--logo">{logo}</div>
      <ul className="navigator--list">
        {sections.map((section, index) => (
          <li key={index} onClick={() => onSectionLabelClick(section)}>
            {section.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

import LinkContent from "../linkContent/LinkContent";

interface NormalLinkProps {
  image: string;
  path: string;
  text: string;
  alt: string;
  active?: boolean;
}

export default function NormalLink({image, path, text, alt, active = false}:NormalLinkProps) {
  return (
    <a href={path} className={active ? "link active" : "link"}>
      <LinkContent image={image} text={text} alt={alt} />
    </a>
  )
}
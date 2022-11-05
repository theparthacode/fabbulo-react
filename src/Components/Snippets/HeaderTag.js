
export default function HeaderTag(props) {
    const { Tag, className, text } = props;
    return (
        <Tag className={className}>{text}</Tag>
    )
}

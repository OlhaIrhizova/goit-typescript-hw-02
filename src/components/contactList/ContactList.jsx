import Contact from "../contact/Contact"

const ContactList = ({contacts,onDelete}) =>{
return(
    <div>
        <ul>
            {contacts.map(item =>(
                <Contact key = {item.id} {...item} onDelete = {onDelete}/>
            ))}
        </ul>
    </div>
);
}
export default ContactList;
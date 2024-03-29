const code = `/* Using a single database query, find all the leads in
    the database that have the same email address as any
    of the leads being inserted or updated. */
for (Lead lead : [SELECT Email FROM Lead WHERE Email IN :leadMap.KeySet()]) {
    Lead newLead = leadMap.get(lead.Email);
    newLead.Email.addError('A lead with this email address already exists.');
}
`;

 export default code;
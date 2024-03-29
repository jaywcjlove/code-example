const code = `// Contract simulating developers organization
contract HackBG =

    record state = { developers: map(address, developer) }

    record developer = { name: string
                       , age: int
                       , skillset: map(skill, experience) }

    type skill = string
    type experience = int

    datatype event =
          LogDeveloperAdded(indexed address, indexed int, string)

    entrypoint init() : state = { developers = {} }

    stateful entrypoint dev_add(account: address, dev_name: string, dev_age: int) =
        require(!is_member(account), "ERROR_DEVELOPER_ALREADY_EXISTS")
        let dev : developer = { name = dev_name
                              , age = dev_age
                              , skillset = {} }
        put(state{ developers[account] = dev })
        Chain.event(LogDeveloperAdded(account, Chain.timestamp, dev_name))

    stateful entrypoint dev_update(account: address, dev_name: string, dev_age: int) =
        require(is_member(account), "ERROR_DEVELOPER_DOES_NOT_EXIST")
        put(state{ developers[account].name = dev_name })
        put(state{ developers[account].age = dev_age })

    function is_member(account: address) : bool =
        Map.member(account, state.developers)

    stateful entrypoint dev_skill_modify(account: address, skill: string, experience: int) =
        put(state{ developers[account].skillset[skill] = experience })

    entrypoint dev_get(account: address) : developer =
        state.developers[account]`;

 export default code;
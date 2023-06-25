let linkedList = () => {
    let HEAD = null;
    let length = 0;
    const append = (value) {
        length++
        let newNode = Node(value);
        if (HEAD === null) {
            return (HEAD = newNode);
        }
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;

    };
    const prepend = (value) => {

        const newNode = Node(value);
        length++
        if (HEAD === null) {
            return (HEAD = newNode);

        }
        newNode.nextNode = HEAD;
        HEAD = newNode;


    }

    const size = () => {

        if (!HEAD) return null;
        let count = 0
        let pointer = HEAD;
        while (pointer !== null) {
            pointer = pointer.nextNode;
            count++;
        }
        return count;
    }

    const head = () => {
        if (!HEAD) return null;
        if (!HEAD) {
            return null;
        }
        return HEAD.value;
    }

    const tail = () => {
        if (!HEAD) return null;
        let pointer = HEAD;
        while (pointer !== null) {
            pointer = pointer.nextNode;
        }

        return pointer.value;
    }

    const at = (index) => {
        if (!HEAD) return null;
        let pointer = HEAD;
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }

    const pop = () => {
        if (!HEAD) return null;
        // for a List with one node
        if (HEAD.nextNode === null) {
            HEAD = null;
        }
        at(size() - 2).nextNode = null;
    }

    const contains = (value) => {
        if (!HEAD) return null;
        let pointer = HEAD;
        while (pointer !== null) {
            if (pointer.value === value) {
                return true;
            }
            pointer = pointer.nextNode
        }

        return pointer.value === value ? true : false;
    }

    const find = (value) => {
        if (!HEAD) return null;
        if (HEAD === value) {
            return 0;
        }
        let pointer = HEAD;
        let index = 0;
        while (pointer !== null) {
            if (pointer.value === value) {
                return value;
            }
            index++
            pointer = pointer.nextNode;
        }
        pointer.value === value ? index : null;
    }

    const toString = () => {
        if (!HEAD) return null;
        let pointer = HEAD;
        let result = "";
        while (pointer !== null) {
            result = result.concat(`( ${pointer.value} ) -->`);
            pointer = pointer.nextNode;

        }
        result = result.concat(`( ${pointer.value} ) --> null`);
        console.log(result);
        return result;
    }
    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,

    };

}

}

const Node = (input) => {
    return {
        value: input || null,
        nextNode: null,
        changeValue(newValue) {
            this.value = newValue;
        },
    };
};
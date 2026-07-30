interface BasicUser {
    id: number;
    name: string;
}

type UserAlias = {
    id: number;
    name: string;
};

function printUser(user: BasicUser): void {
    console.log(`${user.id} - ${user.name}`);
}

function printUserAlias(user: UserAlias): void {
    console.log(`${user.id} - ${user.name}`);
}

const user2: BasicUser = {
    id: 1,
    name: "Nikhil"
};

const userAlias: UserAlias = {
    id: 2,
    name: "Rahul"
};

printUser(user2);
printUserAlias(userAlias);
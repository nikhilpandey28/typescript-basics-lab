type Contact = {
    email: string;
};

type Address = {
    city: string;
};

type UserProfile = Contact & Address;

const profile: UserProfile = {
    email: "nikhil@example.com",
    city: "Lucknow"
};

console.log(profile);
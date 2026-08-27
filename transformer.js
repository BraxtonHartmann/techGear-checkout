const rawUserData = [
    { id: 1, full_name: " Alex Rivera ", email: "alex.r@example.com", role: "admin", status: "active", scores: [88, 92, 95] },
    { id: 2, full_name: "jordan smith", email: "jordan.s@example.com", role: "user", status: "inactive", scores: [70, 65, 68] },
    { id: 3, full_name: " TAYLOR SWIFT ", email: "taylor.s@example.com", role: "user", status: "active", scores: [99, 100, 98] },
    { id: 4, full_name: "Morgan Lee", email: "morgan.l@example.com", role: "editor", status: "active", scores: [82, 85, 80] },
    { id: 5, full_name: "samuel green", email: "sam.g@example.com", role: "user", status: "pending", scores: [60, 62, 58] },
    { id: 6, full_name: " Casey Vance ", email: "casey.v@example.com", role: "editor", status: "inactive", scores: [78, 81, 75] },
    { id: 7, full_name: "PATRICK STAR", email: "patrick.s@example.com", role: "user", status: "active", scores: [55, 50, 60] },
    { id: 8, full_name: " Riley Quinn", email: "riley.q@example.com", role: "admin", status: "active", scores: [91, 89, 94] }
  ];


//   1. Data Cleaning (cleanProfiles):
//   Write an arrow function cleanProfiles that takes an array of user objects and uses .map() and Object Destructuring to return a new array where:
//   full_name has whitespace trimmed and is capitalized properly (e.g., " Alex Rivera " becomes "Alex Rivera").
//   An averageScore property is calculated and added to each object.
//   The original object is not directly mutated.
const cleanProfiles = (users) => {
    return users.map(({ full_name, scores, ...user }) => {
        const cleanedName = full_name.trim();
        const words = cleanedName.split(" ");

        const properName = words.map((word) => {
            word = word.toLowerCase();
            return word[0].toUpperCase() + word.slice(1);
        });
        const formattedName = properName.join(" ");

        // using a reduce seemed to be the best fit here 
        const total = scores.reduce((sum, score) =>{
            return sum + score;
        },0);
        const averageScore = (total / scores.length).toFixed(2);
        return {
            ...user,
            full_name: formattedName,
            averageScore: averageScore
        };
    });
};

//   2. Filtering Active Accounts (filterActiveUsers):
//   Write an arrow function filterActiveUsers that accepts an array of cleaned user objects and uses
//  .filter() to return a subset containing only users where status === "active".
const filterActiveUsers = cleanedUsers => cleanedUsers.filter(user => user.status === "active");

//   3. Non-Mutative Profile Update (updateUserRole):
//   Write an arrow function updateUserRole that takes a user list, a target userId, and a newRole.
//   Use .map() and the Spread Operator (...) to return a brand-new list where only the target user's 
//  role is updated, leaving all other users and original object references untouched.
const updateUserRole = (cleanedUsers, userId, newRole) => {
    const newList = cleanedUsers.map(user => {
        if(user.id === userId){
            return {
                ...user,
                role: newRole
            };
        }else {
            return user;
        }
    });
    return newList;
};

//   4. Role Breakdown (countUsersByRole):
//   Write an arrow function countUsersByRole that takes a user list and uses 
// .reduce() to return an object tallying how many users belong to each role 
// (e.g., { admin: 2, user: 4, editor: 2 }).

// AI helped me figure this one out. I wrote it but I had its help on how to have it make an object with reduce
const countUsersByRole = cleanedUsers => {
    const counts = cleanedUsers.reduce((accumulator, user) => {
        if(accumulator[user.role]){
            accumulator[user.role]++;
        }else{
            accumulator[user.role] = 1;
        }
        return accumulator;
    },{})
    return counts;
};

//   5. Logging Summary Report (logUserDirectory):
//   Write an arrow function logUserDirectory that takes a user list and uses .forEach() 
// to print a formatted string to the console for every user in the list.
//   Example console output: [ID 1] Alex Rivera (ADMIN) - Avg Score: 91.67 | Status: ACTIVE
const logUserDirectory = cleanedUsers => {
    cleanedUsers.forEach(user => {
        console.log(
            "[ID " + user.id + 
            "] " + user.full_name +
            " (" + user.role.toUpperCase() +
            ") - Avg Score: " + user.averageScore +
            " | Status: " + user.status.toUpperCase()
        )
    });
};


console.log("=== 1. Cleaned Data ===");
const cleaned = cleanProfiles(rawUserData);
console.log(cleaned);

console.log("\n=== 2. Active Users Only ===");
const activeUsers = filterActiveUsers(cleaned);
console.log(activeUsers);

console.log("\n=== 3. Updated User Role ===");
const updatedList = updateUserRole(cleaned, 2, "admin");
console.log("Original User 2 Role:", cleaned[1].role); // Should still be 'user'
console.log("Updated User 2 Role:", updatedList[1].role); // Should be 'admin'

console.log("\n=== 4. Role Counts ===");
const roleCounts = countUsersByRole(cleaned);
console.log(roleCounts);

console.log("\n=== 5. User Directory Report ===");
logUserDirectory(cleaned);
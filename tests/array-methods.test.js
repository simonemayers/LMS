//import {users, findJose, premiumMembers, lastName, loginsMoreThanTen, totalLogins} from '../repos/array-methods.js'

test('program should contain users', () => {
    expect(users).toBeDefined()
})

test('program should contain 8 users', () => {
    expect(users.length).toEqual(8);
})

test('should contain a function called "findJose"', () => {
    expect(findJose).toBeDefined()
})

test('findJose should return the Jose object', () => {
    expect(findJose()).toEqual(
        expect.objectContaining({
            id: 3998, 
            firstName: 'Jose', 
            lastName: 'Rivera', 
            logins: 16, 
            isPremiumMember: false
        })
    )
})

test('should contain a function called "premiumMembers', () => {
    expect(premiumMembers).toBeDefined()
})
test('should return an array of premium users', () => {
    expect(premiumMembers()).toEqual(
        expect.arrayContaining([
            {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
            {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
            {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
        ])
    )
})

test('should contain a function called lastName', () => {
    expect(lastName).toBeDefined()
})
test('should return an array of all user last names', () => {
    expect(lastName()).toEqual(
        expect.arrayContaining([
            'Danvers', 
            'Hawkings', 
            'Bodem', 
            'Johnson', 
            'Rivera', 
            'Witherspoon', 
            'Silenski', 
            'Bolislovitz'
        ])
    )
})

test('should contain a function called loginsMoreThanTen', () => {
    expect(loginsMoreThanTen).toBeDefined()
})
test('should return an array of the full names of users with proper spacing who have logged in more than 10 times', () => {
    expect(loginsMoreThanTen()).toEqual(
        expect.arrayContaining([
            'Cam Danvers', 
            'Ragupathy Bodem', 
            'Jose Rivera', 
            'Ted Witherspoon', 
            'Igor Silenski'
        ])
    )
})

test('should contain a function called totalLogins', () => {
    expect(totalLogins).toBeDefined()
})
// test('should return the correct number of total logins for all users', () => {
//     expect(totalLogins()).toEqual(156)
// })


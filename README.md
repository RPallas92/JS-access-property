# JS-access-property
Access to a object's property safely
==============================


**Install**:
Clone the repository and execute:
`npm install`

**Tests**:
To run the tests execute:
`npm test`

**Example**

```
        var testObject = {
            a: {
                b: {
                    c: {
                        d: true
                    }
                }
            }
        }

```

To get the value of d in testObject you would do:


`testObject.a.b.c.d`

But if the objetc comes from a server are you are not sure of its properties, you will get an TypeError

To get the property a.b.c.d.e.f of testObject:

```
testObject.a.b.c.d.e.f
//TypeError: Cannot read property 'f' of undefined

getIf(testObject, 'a.b.c.d.e.f')
// null

var nullObject = 'My default f value';
getIf(testObject, 'a.b.c.d.e.f', nullObject);
// 'My default f value';

getIf(testObject, 'a.b.c.d', nullObject);
// true

```
See test/getif-spec.js fore more info



**License**
MIT

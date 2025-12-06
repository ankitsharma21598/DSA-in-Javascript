### Length of a String

```
let name ="Ankit";
console.log(name.length); //5
```

### Access String Element

```
let name ="Ankit"
console.log(name.charAt(2)); //k
console.log(name[2]); //k
console.log(name.charCodeAt(2)); // 107 (Ascii Code)
```

### Check Presence of Character

```
let name ="Ankit";
console.log(name.includes("m")); //false (& if present it return true)
console.log(name.indexOf("i")); //3 (& if not present it return -1)
console.log(name.lastIndexOf("t")); //4
```

### Compare Two Strings

```
let name="Ankit";
let anotherName="Aman";
console.log(name.localcompare(anotherName)); //1 (& if strings are equal it return 0)

```

### Replace Substring

```
const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "
```

### Substring of a String

```
let name="Ankit";
console.log(name.substring(2,4)); //ki
console.log(name.slice(-2)); //it

```

### Split and Join

✅ **1. split()**

split() is a string method that converts a string into an array, based on a separator.

```
let str ="Hello World";
let result =str.split(" ");
console.log("Result:",result); //Result: [ 'Hello', 'World' ]
```

✅ **2. join()**

join() is an array method that converts an array into a string, with a given separator.

```
let str =[ 'Hello', 'World' ];
let result =str.join(" ");
console.log("Result:",result); //Result: Hello World

```

### String Start and End

```
let str ="Hello World";
let result =str.startsWith("Hello");
console.log("Result:",result); // Result: true


let str ="Hello World";
let result =str.endsWith("World");
console.log("Result:",result); //Result: true
```

## Trim and Case Conversion

```
let str =" Hello World ";
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length); //Hello World 11
console.log(str.trim().toLowerCase()); //hello world
console.log(str.trim().toUpperCase()); //HELLO WORLD
```

## Convert Number and Object to String

```
let num =123
let obj={
    name:"Ankit"
}
console.log( num.toString()); //123
console.log(JSON.stringify(obj)); //{"name":"Ankit"}
```

## Concatenate Strings

```

let firstName="Ankit";
let lastName="Sharma";
console.log(firstName +" "+ lastName);//Ankit Sharma
console.log(`${firstName} ${lastName} is a Best Developer`);//Ankit Sharma is a Best Developer
console.log(firstName.concat(" ",lastName, " is a", " Best"));//Ankit Sharma is a Best

```

# Practice Questions

1. [ Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

2. [Reverse String](https://leetcode.com/problems/reverse-string/)

3. [Valid Anagram](https://leetcode.com/problems/valid-anagram)

4. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)

5. [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

6. [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)

7. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome)

8. [String Compression](https://leetcode.com/problems/string-compression)

9. [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)

10. [Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string)

11. [Rotate String](https://leetcode.com/problems/rotate-string/)

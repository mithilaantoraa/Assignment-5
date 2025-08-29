1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: 

⇨ getElementById('id') = নির্দিষ্ট id দেওয়া এলিমেন্টকে খুঁজে এনে জাভাস্ক্রিপ্টে ব্যবহার করা।

⇨getElementsByClassName = একটা ওয়েবপেজে যদি অনেকগুলো ট্যাগের একই class থাকে, তাহলে document.getElementsByClassName('className') লিখে  সবগুলো একসাথে পাওয়া যায় 
এটা HTMLCollection আকারে রিটার্ন করে (array-এর মতো, কিন্তু পুরোপুরি array না)।

⇨ document.querySelector("selector") = CSS সিলেক্টর দিয়ে প্রথম ম্যাচ করা এলিমেন্ট খুঁজে আনে।

⇨querySelectorAll("selector") = এটা CSS সিলেক্টর দিয়ে মিল থাকা সব এলিমেন্ট খুঁজে আনে।
querySelector() শুধু প্রথম এলিমেন্ট দেয়, কিন্তু
querySelectorAll() সব মিল থাকা এলিমেন্টকে NodeList আকারে দেয় (array-এর মতো, তবে পুরোপুরি array না)।


2. How do you **create and insert a new element into the DOM**?

Ans:জাভাস্ক্রিপ্টে document.createElement() ব্যবহার করে নতুন একটি HTML এলিমেন্ট তৈরি করা যায় এবং appendChild() বা append() মেথড ব্যবহার করে সেই এলিমেন্টকে DOM-এ যোগ করা হয়।

🔹 ধাপগুলো:

a. document.createElement("tagName") দিয়ে নতুন এলিমেন্ট তৈরি করা।
b. textContent বা innerHTML দিয়ে লেখা/কনটেন্ট যোগ করা।
c. প্রয়োজনে className, id, style ইত্যাদি সেট করা।
d. appendChild() বা append() দিয়ে DOM-এর নির্দিষ্ট জায়গায় বসানো।

3. What is **Event Bubbling** and how does it work?
Ans:Event Bubbling হলো জাভাস্ক্রিপ্টে এমন একটি প্রক্রিয়া যেখানে কোনো ইভেন্ট (যেমন: click) কোনো চাইল্ড এলিমেন্টে ঘটলে সেটি ধাপে ধাপে তার প্যারেন্ট এলিমেন্ট, তারপর তার প্যারেন্ট—এভাবে ক্রমান্বয়ে DOM-এর উপরের দিকে পৌঁছে যায়।
অর্থাৎ ইভেন্ট চাইল্ড থেকে প্যারেন্টে “বাবল” করে উপরে উঠে যায়।

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation হলো জাভাস্ক্রিপ্টের একটি টেকনিক, যেখানে আমরা অনেকগুলো চাইল্ড এলিমেন্টে আলাদা আলাদা ইভেন্ট লিসেনার দেওয়ার বদলে তাদের প্যারেন্ট এলিমেন্টে একটিমাত্র ইভেন্ট লিসেনার বসাই।
কারণ Event Bubbling-এর মাধ্যমে ইভেন্ট প্যারেন্ট পর্যন্ত পৌঁছে যায়, তাই প্যারেন্ট থেকে চাইল্ডের ইভেন্টগুলো হ্যান্ডেল করা যায়।


5. What is the difference between preventDefault() and stopPropagation()?
Ans:
preventDefault() = কোনো ইভেন্টের ডিফল্ট ব্রাউজার অ্যাকশন বন্ধ করে। যেমন: লিংকে ক্লিক করলে পেজ না খোলা, ফর্ম সাবমিট না হওয়া।
stopPropagation() = ইভেন্টকে বাবলিং বা ক্যাপচারিং থেকে আটকায়, অর্থাৎ প্যারেন্ট এলিমেন্টে ইভেন্ট পৌঁছাবে না।
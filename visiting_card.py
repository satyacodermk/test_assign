# सेक्शन 1: उपयोगकर्ता से व्यक्तिगत जानकारी लेना date : 10-11-2026
full_name = input("अपना पूरा नाम लिखें: ").strip()
city = input("अपना शहर लिखें: ").strip()

# उम्र को integer में बदलना और गलत इनपुट को संभालना
while True:
    age_input = input("अपनी उम्र लिखें: ").strip()
    try:
        age = int(age_input)
        if age <= 0:
            print("कृपया उम्र शून्य से बड़ी संख्या में लिखें।")
            continue
        break
    except ValueError:
        print("उम्र के लिए कृपया केवल पूरी संख्या लिखें।")

favourite_language = input("अपनी पसंदीदा प्रोग्रामिंग भाषा लिखें: ").strip()
phone = input("अपना फोन नंबर लिखें: ").strip()
email = input("अपना ईमेल लिखें: ").strip()

# सेक्शन 2: मल्टीलाइन About Me स्ट्रिंग बनाना
about_me_text = input("अपने बारे में एक छोटा पैराग्राफ लिखें: ").strip()
about_me = f"""
{about_me_text}
"""

# सेक्शन 3: कार्ड की चौड़ाई और बॉर्डर तैयार करना
card_width = 48
top_border = "=" * card_width
separator = "-" * card_width

# सेक्शन 4: डिजिटल विजिटिंग कार्ड प्रिंट करना
print()
print(top_border)
print("मेरा डिजिटल विजिटिंग कार्ड".center(card_width))
print(top_border)
print(f"नाम     : {full_name}")
print(f"शहर     : {city}")
print(f"उम्र     : {age}")
print(f"भाषा    : {favourite_language}")
print(f"फोन     : {phone}")
print(f"ईमेल    : {email}")
print(separator)
print("About Me:")
print(about_me.strip())
print(top_border)

# सेक्शन 5: कुछ वेरिएबल्स के डेटा टाइप दिखाना
print("\nडेटा टाइप की जाँच:")
print("full_name का type:", type(full_name))
print("age का type:", type(age))
print("phone का type:", type(phone))

# सेक्शन 6: जानबूझकर किए गए एरर के उदाहरण
# नीचे दिए गए गलत कोड को जानबूझकर comment किया गया है,
# ताकि मुख्य प्रोग्राम बिना रुके पूरा चल सके।
#
# गलत variable name:
# 2name = "Test"
# संभावित एरर: SyntaxError: invalid decimal literal
# कारण: Python variable का नाम अंक से शुरू नहीं हो सकता।
#
# गलत indentation:
#     print("Hello")
# संभावित एरर: IndentationError: unexpected indent
# कारण: किसी block के बाहर बिना आवश्यकता अतिरिक्त indentation दिया गया है।
#
# इन एरर को देखने के लिए ऊपर के उदाहरणों को अलग-अलग नई .py फाइल में
# uncomment करके चलाएँ। मुख्य visiting_card.py में इन्हें comment ही रखें।

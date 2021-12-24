# Validate person name

def is_valid(username):
    if not username or username == '' or type(username) is not str or ' ' not in username:
        return False
    
    for char in username:
        if char == ' ':
            continue

        if ord(char.lower()) <= 97 and ord(char.lower()) >= 122:
            return False

    return True
    

result = is_valid('Mark Last')
print(result)

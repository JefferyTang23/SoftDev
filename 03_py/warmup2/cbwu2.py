def string_times(str, n):
  if n == 0:
    return ""
  string = ""
  while n > 0:
    string = string + str
    n = n - 1
  return string

def front_times(str, n):
  front = str[:3]
  string = ""
  while n > 0:
    string = string + front
    n = n - 1
  return string

def string_bits(str):
  string = ""
  index = 0
  while index < len(str):
    string += str[index]
    index += 2
  return string

def string_splosion(str):
  string = ""
  index = 1
  while index <= len(str):
    string += str[:index]
    index += 1
  return string

def last2(str): #incomplete
  count = 0
  index = 0
  while index < len(str):
    index2 = index+1
    string = str[index:index+2]
    while index2 < len(str):
      string2 = str[index2:index2+2]
      if string == string2:
        count += 1
      index2 += 1
    index += 1
  return count
      
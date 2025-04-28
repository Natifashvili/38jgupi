# def print_numbers(kesanegod):
#     for i in range(kesanegod):
#         print("ახალი ხაზი")
#         print(i)
#         print("ხაზი დასრულდა")

# print_numbers(5)  

# def sum_list(numbers):
#     total = 0
#     for num in numbers:
#         total += num
#     return total

# print(sum_list([1, 2, 3]))     
# print(sum_list([1, 2, 3, 4]))   



def counter(arr):
    counter = 0
    for i in arr:
        print("ხაზის დასაწყისი")
        print(i, "+", counter, "=", i + counter, "counter:", i + counter,"-------", "i:", i)
        counter = i + counter
        print("ხაზის დასასრული")
        
    return counter

print(counter(range(1, 5)))  
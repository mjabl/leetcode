def count_one_bits(n: int):
    count = 0
    while n:
        n = n & n - 1
        count += 1
    return count


print(count_one_bits(157))

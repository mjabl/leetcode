
def how_sum(target, nums):
    memo = {}

    def _how_sum(target, nums):
        if target in memo:
            return memo[target]
        if target == 0:
            return []
        if target < 0:
            return None
        for num in nums:
            remainder = target - num
            result = _how_sum(remainder, nums)
            if result is not None:
                memo[target] = result + [num]
                return memo[target]
        memo[target] = None
        return None

    return _how_sum(target, nums)


print(how_sum(7, [2, 3]))  # [3, 2, 2]
print(how_sum(7, [5, 3, 4, 7]))  # [4, 3]
print(how_sum(7, [2, 4]))  # None
print(how_sum(8, [2, 3, 5]))  # [2, 2, 2, 2]
print(how_sum(300, [7, 14]))  # None

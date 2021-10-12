class Solution:
    """Boyer-Moore-Horspool solution to the strstr problem"""

    class BadMatchTable:
        def __init__(self, pattern: str):
            self.default_offset = len(pattern)
            self.table = {}
            for i, letter in enumerate(pattern[:-1]):
                self.table[letter] = len(pattern) - i - 1

        def get_offset(self, letter):
            return self.table.get(letter, self.default_offset)

    def strStr(self, haystack: str, needle: str) -> int:
        if needle == "":
            return 0
        bad_match_table = self.BadMatchTable(needle)
        i = len(needle) - 1
        while i < len(haystack):
            if haystack[i] == needle[-1]:
                start = i - len(needle) + 1
                if haystack[start: i + 1] == needle:
                    return start
            i += bad_match_table.get_offset(haystack[i])
        return -1

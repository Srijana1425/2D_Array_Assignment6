# 2D_Array_Assignment6
**Question 1**<br>
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:<br>
- s[i] == 'I' if perm[i] < perm[i + 1], and<br>
- s[i] == 'D' if perm[i] > perm[i + 1].<br>
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.<br>
**Example 1:**<br>
**Input:** s = "IDID"<br>
**Output:**[0,4,1,3,2]<br><br>
*Answer*<br>
**code** [Link]()<br>
*********************************************************************************************************************************
**Question 2**<br>
You are given an m x n integer matrix matrix with the following two properties:<br>
- Each row is sorted in non-decreasing order.<br>
- The first integer of each row is greater than the last integer of the previous row.<br>
Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.<br>
You must write a solution in O(log(m * n)) time complexity.<br>
**Example 1:**<br>
![example1](https://github.com/Srijana1425/2D_Array_Assignment6/blob/main/img/example%202.png)<br>
**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3<br>
**Output:** true<br><br>
*Answer*<br>
**code** [Link]()<br>
*********************************************************************************************************************************
**Question 3**<br>
Given an array of integers arr, return *true if and only if it is a valid mountain array*.
Recall that arr is a mountain array if and only if:<br>
- arr.length >= 3<br>
- There exists some i with 0 < i < arr.length - 1 such that:<br>
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]<br>
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]<br>
 ![example2](https://github.com/Srijana1425/2D_Array_Assignment6/blob/main/img/example%203.png)<br>
 **Example 1:**<br>
**Input:** arr = [2,1]<br>
**Output:** false<br><br>
*Answer*<br>
**code** [Link]()<br>
*********************************************************************************************************************************
**Question 4**<br>
Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.<br>
**Example 1:**<br>
**Input:** nums = [0,1]<br>
**Output:** 2<br>
**Explanation:**[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.<br><br>
*Answer*<br>
**code** [Link]()<br>
*********************************************************************************************************************************
**Question 5**<br>
The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).
- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.
Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.<br>
**Example 1:**<br>
**Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]<br>
**Output:** 40<br>
**Explanation:** We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40<br><br>
*Answer*<br>
**code** [Link]()<br>
*********************************************************************************************************************************
**Question 6**<br>
An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.
Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.<br>
**Example 1:**<br>
**Input:** changed = [1,3,4,2,6,8]<br>
**Output:** [1,3,4]<br>
**Explanation:** One possible original array could be [1,3,4]:<br>
- Twice the value of 1 is 1 * 2 = 2.<br>
- Twice the value of 3 is 3 * 2 = 6.<br>
- Twice the value of 4 is 4 * 2 = 8.<br>
Other original arrays could be [4,3,1] or [3,1,4].<br><br>
*Answer*<br>
**code** [Link]()<br>
*********************************************************************************************************************************
**Question 7**<br>
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.<br>
**Example 1:**<br>
![example3](https://github.com/Srijana1425/2D_Array_Assignment6/blob/main/img/example%207.png)<br>
**Input:** n = 3<br>
**Output:** [[1,2,3],[8,9,4],[7,6,5]]<br><br>
*Answer*<br>
**code** [Link]()<br>
*********************************************************************************************************************************
**Question 8**<br>
Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.<br>
**Example 1:**<br>
![example4](https://github.com/Srijana1425/2D_Array_Assignment6/blob/main/img/example%208.png)<br>
**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]<br>
**Output:**[[7,0,0],[-7,0,3]]<br><br>
*Answer*<br>
**code** [Link]()<br>

var defFn = function(problem, param1, param2, ...) {
    // recursion terminator  递归终止条件
    if (problem) 
        print_result 
        return
    // prespare data  处理当前问题
    var data = prespare_data(problem)
    var subproblems = split_problem(problem, data)

    // conquer subproblems   解决子问题
    var subresult1 = defFn(subproblems[0], param1, param2, ...)
    var subresult2 = defFn(subproblems[1], param1, param2, ...)
    var subresult3 = defFn(subproblems[2], param1, param2, ...)
    ...

    // process and generate the final result   处理最终结果

    result = process_result(subresult1,subresult2,subresult3, ...)
}
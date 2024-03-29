import {defineStore} from "pinia";
import {ref} from "vue";

export const useExpenseStore = defineStore('expense', () => {
    const expenseList = ref([] as ITransaction[]);
    const expenseItem = ref({} as ITransaction);

    const fetchExpenses = (data: ITransaction[]) => {
        // expenseList.value = data.value as ITransaction[];
        expenseList.value = data
        // console.log(data)
        // console.log(expenseList.value)
        // console.log(expenseItem.value)
    };

    const createExpense = (expense) => {
        // console.log(expense)
        // console.log(expenseList.value)
        if (expense) expenseList.value.push(expense)
    };


    return {fetchExpenses, createExpense,expenseList};
});
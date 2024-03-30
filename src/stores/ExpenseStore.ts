import {ref} from "vue";
import {defineStore} from "pinia";
import {useToast} from 'vue-toastification';
import {useApi} from "../composables/useApi";

export const useExpenseStore = defineStore('expense', () => {
    const toast = useToast();
    const expenseList = ref([] as ITransaction[]);
    const expenseItem = ref({} as ITransaction);

    // @ts-ignore
    const fetchExpenses = async () => {
        const {data, error} = await useApi("/todo");
        if (data.value) expenseList.value = data.value as ITransaction[];
    };

    const createExpense = (expense) => {
        // if (expense) expenseList.value.push(expense)
    };

    // @ts-ignore
    const deleteExpense = async (id: number) => {
        const {data, error} = await useApi(`/todo/${id}`).delete();
        if (data.value) {
            const foundIndex = expenseList.value.findIndex((x) => x.id === id);
            expenseList.value.splice(foundIndex, 1);
            toast.success('حذف با موفقیت انجام شد');
        } else {
            toast.error('متاسفانه مشکلی رخ داده است');
        }
    }

    return {expenseList, expenseItem, fetchExpenses, createExpense, deleteExpense};
});
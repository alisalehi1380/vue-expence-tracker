import {ref} from "vue";
import {defineStore} from "pinia";
import {useToast} from 'vue-toastification';
import {useApi} from "@/composables/UseApi";

export const useExpenseStore = defineStore('expense', () => {
    const toast = useToast();
    const expenseList = ref([] as IExpenseItem[]);
    const expenseItem = ref({} as IExpenseItem);

    // @ts-ignore
    const fetchExpenses = async (): Promise => {
        const {data, error} = await useApi("/todo");
        if (data.value) expenseList.value = data.value as IExpenseItem[];
    };

    // @ts-ignore
    const createExpense = async (payload: IExpenseItem): Promise => {
        const {data} = await useApi('/todo/').post(payload);
        if (data.value) expenseList.value.push(data.value as IExpenseItem);
    };

    // @ts-ignore
    const deleteExpense = async (id: number): Promise => {
        const {data, error} = await useApi(`/todo/${id}`).delete();
        if (data.value) {
            const foundIndex = expenseList.value.findIndex((x) => x.id === id);
            expenseList.value.splice(foundIndex, 1);
            toast.success('حذف با موفقیت انجام شد');
        } else {
            toast.error('متاسفانه مشکلی رخ داده است');
        }
    }

    const totalIncome = (): number => {
        let total = 0;
        expenseList.value.forEach(item => {
            if (item.amount > 0) {
                total += item.amount
            }
        });
        return total;
    }

    const totalExpense = (): number => {
        let total = 0;
        expenseList.value.forEach(item => {
            if (item.amount < 0) {
                total += item.amount
            }
        });

        return total;
    }

    const balance = (): number => {
        return totalIncome() + totalExpense();
    }

    return {expenseList, expenseItem, fetchExpenses, createExpense, deleteExpense, totalIncome, totalExpense, balance};
});
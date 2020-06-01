export class Sort {


    public static Deduplication(arr: number[]) {
        let map = {};
        for (let i = 0; i < arr.length; ++i) {
            if (map[arr[i]] != null) {
                arr.splice(i, 1);
                --i;
            } else {
                map[arr[i]] = true;
            }
        }

        return arr;
    }

    public static BubbleSort(sortArray: number[]) {
        let now = Date.now();
        for (let i = 0; i < sortArray.length; ++i) {
            for (let j = 0; j < sortArray.length; ++j) {
                if (sortArray[i] >= sortArray[j]) {
                    [sortArray[i], sortArray[j]] = [sortArray[j], sortArray[i]]
                }
            }
        }
        console.log("BubbleSort Cost time:", Date.now() - now, " ms")
        console.log("BubbleSort:", Sort.Deduplication(sortArray));
    }

    public static SelectSort(sortArray: number[]) {
        let now = Date.now();
        for (let i = 0; i < sortArray.length; ++i) {
            let select: number = i;
            for (let j = i + 1; j < sortArray.length; ++j) {
                if (sortArray[select] < sortArray[j]) {
                    select = j
                }
            }
            [sortArray[i], sortArray[select]] = [sortArray[select], sortArray[i]]
        }
        console.log("SelectSort Cost time:", Date.now() - now, " ms")
        console.log("SelectSort:", Sort.Deduplication(sortArray));
    }

    public static QuickSort(sortArray: number[]) {
        let now = Date.now();

        function quick_sort(array: number[], left: number, right: number) {
            if (left < right) {
                // set the judge number
                let compare = array[left];
                let i = left;
                let j = right;
                while (i < j) {
                    // find the first number larger than compare from right
                    while (i < j && array[j] <= compare) j--;
                    if (i < j) {
                        array[i++] = array[j];
                    }

                    // find the first number smaller than compare from left
                    while (i < j && array[i] > compare) i++;
                    if (i < j) {
                        array[j--] = array[i]
                    }
                }
                array[i] = compare;
                quick_sort(array, left, i - 1);
                quick_sort(array, i + 1, right);
            }
        }

        quick_sort(sortArray, 0, sortArray.length - 1);


        console.log("QuickSort Cost time:", Date.now() - now, " ms")
        console.log("QuickSort:", Sort.Deduplication(sortArray));
    }

    public static MergeSort(sortArray: number[]) {
        let now = Date.now();

        function merge(left: number[], right: number[]) {
            let result = []
            while (left.length > 0 && right.length > 0) {
                if (left[0] > right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift())
                }
            }



            while (right.length > 0) {
                result.push(right.shift())
            }

            while (left.length > 0) {
                result.push(left.shift())
            }

            return result;
        }

        function merge_sort(arr: number[]) {
            if (arr.length < 2) {
                return arr;
            }

            let middle = Math.floor(arr.length / 2);
            let left = arr.slice(0, middle);
            let right = arr.slice(middle);
            return merge(merge_sort(left), merge_sort(right));
        }

        sortArray = merge_sort(sortArray);
        console.log("MergeSort Cost time:", Date.now() - now, " ms")
        console.log("MergeSort:", Sort.Deduplication(sortArray));
    }
}
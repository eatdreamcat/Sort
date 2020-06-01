import { Sort } from "./Sort";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    private sortNumbers = [];
    onLoad() {
        let count = 10000;
        while (count--) {
            this.sortNumbers.push(Math.round(Math.random() * 100));
        }

        let arrTemp = this.sortNumbers.concat();
        let now = Date.now();
        arrTemp.sort((a, b) => { return b - a });
        console.log(" ArraySort Cost time:", Date.now() - now, " ms")


        Sort.BubbleSort(this.sortNumbers.concat());

        Sort.SelectSort(this.sortNumbers.concat());

        Sort.QuickSort(this.sortNumbers.concat());

        Sort.MergeSort(this.sortNumbers.concat());

    }

    start() {
        // init logic
        this.label.string = this.text;
    }
}

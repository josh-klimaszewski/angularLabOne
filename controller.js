(function () {
    function FormController() {
        var vm = this;
        vm.items = [];
        vm.updateInfo = function (item) {
            if (item) {
                vm.items.push({
                    item: item
                });
            }
            document.getElementById('addInput').value = "";
        }
        vm.removeInfo = function (item) {
            var array = vm.items;
            var index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
    angular
        .module("app")
        .controller("FormController", FormController)
})();
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-05-27 20:07:10
 * @version $Id$
 */
function createTable() {
            if (tableDiv.childNodes[0]) {
                tableDiv.removeChild(tableDiv.childNodes[0]);
            }
            arr = getTableData();
            table = document.createElement("table");

            regionLen = selectRegion.length;
            productLen = selectProduct.length;
            if (productLen == 1 && regionLen >= 1) {

                diffTable1();//可以换成diffTable3()，该函数包含diffTable1()的情况。
            }
            else if (regionLen == 1 && productLen > 1) {
                diffTable2();
            }
            else if (regionLen > 1 && productLen > 1) {
                diffTable3();
            }
            //把生成的HTML内容赋给table - wrapper 
            document.querySelector("#table-wrapper").appendChild(table);
        }

        function diffTable1() {
            // 输出表头：商品、地区、1月、2月、…… 12月
            var headTable = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
            var header = table.createTHead();
            var tr0 = header.insertRow(0);
            for (var i = 0; i < headTable.length; i++) {
                var th = tr0.insertCell(tr0.cells.length);
                th.innerHTML = headTable[i];
            }

            /*                          遍历数据 {
                                        输出每一行的表格HTML内容
                                    } */


            for (var i = 0; i < arr.length; i++) {

                if (i == 0) {
                    var tr = table.insertRow(table.rows.length);
                    var td = tr.insertCell(0);
                    td.innerHTML = arr[i].product;
                    td.rowSpan = arr.length;
                    var td = tr.insertCell(1);
                    td.innerHTML = arr[i].region;

                    for (var j = 0; j < 12; j++) {
                        var td = tr.insertCell(j + 2);
                        td.innerHTML = arr[i].sale[j];
                    }
                } else {
                    var tr = table.insertRow(table.rows.length);
                    var td = tr.insertCell(0);//合并单元格后，后面行少一个单元格
                    td.innerHTML = arr[i].region;

                    for (var j = 0; j < 12; j++) {
                        var td = tr.insertCell(j + 1);
                        td.innerHTML = arr[i].sale[j];
                    }
                }

            }

        }

        function diffTable2() {
            // 输出表头：商品、地区、1月、2月、…… 12月
            var headTable = ["地区", "商品", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
            var header = table.createTHead();
            var tr0 = header.insertRow(0);
            for (var i = 0; i < headTable.length; i++) {
                var th = tr0.insertCell(tr0.cells.length);
                th.innerHTML = headTable[i];
            }

            /*                          遍历数据 {
                                        输出每一行的表格HTML内容
                                    } */


            for (var i = 0; i < arr.length; i++) {

                if (i == 0) {
                    var tr = table.insertRow(table.rows.length);
                    var td = tr.insertCell(0);
                    td.innerHTML = arr[i].region;
                    td.rowSpan = arr.length;
                    var td = tr.insertCell(1);
                    td.innerHTML = arr[i].product;

                    for (var j = 0; j < 12; j++) {
                        var td = tr.insertCell(j + 2);
                        td.innerHTML = arr[i].sale[j];
                    }
                } else {
                    var tr = table.insertRow(table.rows.length);
                    var td = tr.insertCell(0);//合并单元格后，后面行少一个单元格
                    td.innerHTML = arr[i].product;

                    for (var j = 0; j < 12; j++) {
                        var td = tr.insertCell(j + 1);
                        td.innerHTML = arr[i].sale[j];
                    }
                }

            }
        }

        function diffTable3() {
            // 输出表头：商品、地区、1月、2月、…… 12月
            var headTable = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
            var header = table.createTHead();
            var tr0 = header.insertRow(0);
            for (var i = 0; i < headTable.length; i++) {
                var th = tr0.insertCell(tr0.cells.length);
                th.innerHTML = headTable[i];
            }


            for (var i = 0; i < productLen; i++) {
                for (var z = 0; z < regionLen; z++) {
                    if (z == 0) {
                        var tr = table.insertRow(table.rows.length);
                        var td = tr.insertCell(0);
                        td.innerHTML = arr[z + i * regionLen].product;
                        td.rowSpan = regionLen;
                        var td = tr.insertCell(1);
                        td.innerHTML = arr[z + i * regionLen].region;

                        for (var j = 0; j < 12; j++) {
                            var td = tr.insertCell(j + 2);
                            td.innerHTML = arr[z + i * regionLen].sale[j];
                        }
                    }
                    else {
                        var tr = table.insertRow(table.rows.length);
                        var td = tr.insertCell(0);//合并单元格后，后面行少一个单元格
                        td.innerHTML = arr[z + i * regionLen].region;

                        for (var j = 0; j < 12; j++) {
                            var td = tr.insertCell(j + 1);
                            td.innerHTML = arr[z + i * regionLen].sale[j];
                        }

                    }
                }
            }
        }

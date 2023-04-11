export function sortVersions(list) {
    let returnArr = []
    let majors = {}
    
    list.forEach(item=> {

        if(item % 1 === 0) {
            item = `${item}.0.0`
        }

        let key = item.toString().split('.')[0];
        let value = item.substring(item.indexOf(".")+1, item .length)

        if (majors[key]) {
            majors[key].push(value)
        } else {
            majors[key] = [value]
        }

    })

    for(let major in majors) {
        majors[major].sort((a, b) => a - b)

        majors[major].forEach(element => {
            returnArr.push(`${major}.${element}`)
        });
    }

    return returnArr;
}

const list1 = ["1", "1.0", "2", "1.0.4", "2.0.4", "1.2", "1.3", "2.3", "3.4.2", "2.3.2","2.5.4","2.3.1"]  

// Or we can avoid all of that hassle and simply... (:

function sortVersions2(list) {
    return list.sort();
}

sortVersions2(list1)
let a = 0;
        let b = 1;
        console.log(a);
        console.log(b);

        for (let i = 0; i <= 100; i++) {
            var fn = a + b;
            console.log(fn);
            a = b;
            b = fn;
        }
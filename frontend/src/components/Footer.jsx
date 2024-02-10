const Footer = () => {
  return (
    <div>
     <footer className="bg-white">
    <div className="container px-16 pt-16 pb-5 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl">Subscribe our newsletter to get update.</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"></input>
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Who We Are</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Our Philosophy</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Information Technology</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300   hover:underline hover:text-blue-500">Finance & Insurance</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8"></hr>
        
        <div className="flex items-center justify-between">
            <a href="#">
                <img className="w-auto h-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAACCCAMAAAB8Uz8PAAAA9lBMVEX///9ChfTqQzX7vAU0qFM6gfTn9OoZokIeo0XP6NU9g/T7ugD7uAA2f/SIr/dqnPaqxfnqPi/pOirpMR4se/PpLhrpNSPpOyz0+P5nunuyyvr6/frv9P64zvr6/P9TjvWXuPjm7v1ak/XF1/vylpDtZFrc5/374uDsWU786Of++Pj/+/GjwPnucGfrSTzsVEjT4fzK2vv50c70qqX4x8TwhX7veHB/qfeMsfhvn/b2ubX+8dP92oyZufjxjofzn5r+6bv5zcr803L+7cj1sq78zV77xDX0paD8ylD94aT81Xr94KDwgXr+9+P8xkL81XnoIgAAmyyWIprcAAAR90lEQVR4nO1daUPiTBI2unnf3UCEnLgoh4CoCIqKAo6jjOM1ozOz+///zBLC0VV9JhhnFvN8moHQpvN0dR1dVVlbi4Kt3Waz2+02d3ci/SzFW2C33u5XTNc1J3BdV8tt5rvl331bHwU7pb7mmrpuaCQMfcxF7XPzd9/d6mOrmDNN+PABD642SFlIEt2+zn/+U+hurfSBdqS//k3iXwn/tXpN+vxDWTC1fMK38ufgr7//scDfyVJwqkjABKZWSvRm/hwACv6ZJAW7OVedgAkJtY+hE96NgqqrRyIg2I7cQXL38+fgnShojjeWGDAru0nd0Z+D96GgHXEPWgiCufoa4T0oKA9jiUCI1d+M3oGCXS2yFiBh5pK4qT8IyVPQ1XmbkK4HwaHg20msiHeZWVntGF7iFJxyNiHd1Yef682d0A3eap7m+xXXZMmLYa62Tk6aglOX/fy1NsPo3ykNXYqxVWcgaQqYDOjmJtfp2sprcEcy9BVnIGEKmoxdyNQ/bwl/VKoQvzKMVWcgWQp2DErFGuZATECAvKF/HAaSpaBGaVfFuM9OPxQEQ1t9BhKloE8x4H5W/W0p0AgfgoEkKShhVWyYp+q/3q3oH2EXWkuSgh3MgB5tTZdrK28LhUiOghzahvSKXA9DfAwGkqMAb0PRGfgoSIqCMjJHDS1lgIOkKKjibehjHELGQUIU7CC32K2/1cirh4QoGEAK9JU/d1kCyVCwA7cho/JG464kkqGgDSlwu2807koiGQqQNTR8o2FXE4lQUIeawP0gPlZMJELBEOxD+ubbjLqqSIKCrVQIoiAJCuA+pL+rJmid9c4bNxcXN7dXXw5jjnH0afTy/e7u7tf1t9GP7VhDlHfr+erm5uBz8VSa/hGBgtb+eHYXk9mdtUQX9kFwIkqEejm0ehcHjuPbdqFQsG3f8Y479/sRxzgafX/MZLPZzATjf2w8v3yKOMZucagFBVy6PknTqQzEBqEqBftPe5bn+8HsCuPZOQc3Z9xrUf1SxAnERe/S9gvWOoDlOwfnwuUC8fUuM374GwBjHjauf6iPUc+ZMBfH0N1Kvjz9bjhHrj39gRIFrfsDx4azs2zn+JY9uV0QI30nZXx/7KDHP2fBv1Dckb49ZtHjX7DwoCgKRY2VkmZMqyWKrjGHOXswChS0bm2fOT3bb7BIKAFVYL5HdOhq3Wc+/xAF50ZBEkYbHAKmLDwoSMJphZs9a+bGSqFIfK2rU3Dv29zJ2fYV/YMBEEM3+SD14Z4jICBcLIz7BDh6FhEQkvAiGaPcFyWQG3ozHgWy6XmX1AKrkfdh1NQe4xK499hbkOw+SYxkBATIPh6JxmjK0pfdZikGBT3ODksssGO8076zX/bqyQmY3KfAOLrOygkIBCHzlT8Gla3AEIQcsToVKXhSmJ5lw7ltgVsxi7Geqzr2RFoA3KfPteEe1BgINqMRb4y2nIHg7DAqBQ2lBYbm1oQUJOsVtA74ioqC94U9yLMqA8Fm9I09xmcVBgCUKGjItNwMPikHXWAUuAoHlsNcBEBn86CgzsCYA6YcRGFgzMGINUY+MgNKFJyrbbJjWOuEroPhCVehPCNI2lIFPHq4ZMqANXYf2SrMZ3gIv5gMhN4xkwOGh1BnMmDoOp1UG4WCMxYDlu2PXWRqfoW9xe+QW6Bgk1Yi1AKC8r9bWg9YvufvvV68dtY9n5YQ64T6499oBoK4xOPD3d3zRpZhKGU2KLtol+EN6K5Z62/2g1AFe3pyClr09AqOf3l7f3Xf6DjYUPIbHAp0hWYSUSjQicYI9CKxvIN5VKj15dWjhMS+QH/7B8VAJrsxjwptf73L0hc8SydgmJX8bAfeKeWYJddyCjp4DRW8i8VW+qWDjHFvrg4gBcZbU1Bd/O4YR4ScS2ictZ4oScAq+REv8+xPZHi+bFCXIJX8GQuBWYNGyO6QsVFJKeihFWZ5F9C32Ye2yELEE5aChZ/RQHJqH9PatnWJTArrGHyPt6FMZkSNsX2HBSEDtqJd9HwNhiFeNyhBkFKAVliBMb0L8Aj8+9lfS1QX6P3Zrw7Rw/XZ/u89vuyc+PIILXCO/4t958wv8lt4RqjpzI4BO1SthYyCe7jC7D3W9C6gHEwvOY1uEUWhYH4ABP/6uo93+Rl6WA6IqSCvOEvt8lN8QsZRlgjZdaEQ8HJnyzU0SxkFUAjsDvvOTsir/KfwQ1hfZir4BbEoQEJgX3KHR3sqIQbbaH/5yR3jE+Qq833xFcwg5+fObmlwmhIK4MqxDjijnkFZCZcX3BpVYtWxNqJbjipi4MnnXAo1AcPaXGCE5GV+nok0gaBCF9U+SijoQCHgHHmcXYLLZgFheGLTZv+WRBQKjBkFcHfxhKcye+A+Fz4yNIeyghjc2toDvHZuFMH8ZWFIDFpOYgoOwbJxmLH21jk+p7Km/hl71QoQSQqm2anQJ7BvhX/gEFxcuJl+DH2CzINwDKi5F3sW3IbEoXkwTzEFVyQFzG1o/8KhT9KmvgGyEIQ3NUHFFAIGv6dS1QD7UEHyF26gezD99AVQkJWcikHVnZ1uWlAZSzI3yRMbCQVgg3F61FBXBx4rPGaHy+szPDWTZxEV82KQi2cm6cASkAgBFoOZG/lMLmyJEGAxmEXrwGRl51NldQqOwf6Cp9Pw2UfJlu9PFDJyDJY+MAC1ClP13oLPVHo+D7TB1IWB9pBYEwS4A4xdhx8CU1Pav2qTIExIAVgzdgMM0uvQgZeQAOdkmi4CSy2NpdsJAUdjGvw+I002a08yAvJzCqELgcJD0jG+ktdnHieflaGGlTlBp6oHlz3yfh0iqHL4xEsVsZ3LhfsM1evS5/d5nZ7lOXmL0n0IraqpdgN2ZuZOOgZypSefAUNTfk5OnigKKXgi17k3dybPXn32IaHlrN+SWwGy05Zt+grVe/gZ0MY+5zSMBNhb/clHQBvzTsNIABs2M9HeYNMlQ4gcVBQpuCB1rR1eF2RzsU+obK+DFDZy2ZctsQEHrlPnGBgMclWAPJ1wWf0in6hcFSDXIDSg8kBPyVsZEj0hhBSQ8wuFdv+Gk801VsE3dGYCYEBzlzs+BgehM5sUqFdLIVELLKuQM8YTFeOa5gwYRKa8mKiqSAE5v0DVXe0xbdDgCOGE6bZVo/grEe56MUtgkx4rUAB2LmeyaiAFwhShEHDnGgUfgbQ1hXPytiIFB4CCJ64N6rxy0kJgEsWSYgCG0qe6HWztovjQDLc0BcAtyCqM8Y2mYBOsD7kLRGxcyhSsWzwb9FiQsgwDs0sVXAKTdG7hnpD3ciwcIISUgnhSAChQ8ELzMaSADdvvCK0QVGxmKsTqeACx4Ll1BW9RYSMCIQqPsREp6AJIwUQXVBPaiPbEFGAblAUUeYvfZBFlJc3GAQaOo2ARMUwo4O2yUlMwvtM/ANW9CoH5gSIFHREFtrcny1JeQwGpZTRyjp0jDBa1w682mQPob2/y0TW9r4jxkxYbGHiTe0DEdNT9AigAvs2wQVnAYhAzuxclJc0Nb+A9zo+t+YAxpVB5QO/4u2QEHFMKj/ChxSwPzKsGKJ44eZqBDapaNYS0gebGitahRgru/AsQQ7H4h5ai68FhZEYeI/rEiBGhJC7ZELuqAYoeMw5hezwblIkcOoeJ1YsFyhIRAIDRZ1+6MF6Bwx+ecqPos1QfA89sFlOC4TCZb5aPFSmdLhxnPUrZ3BqdXRPHO0BN98mAH/PIlAuYGjjTHT9Z0Wc+QErXLKYEulBKiykqyvUFx/D5r9uO2AZlgsoxiywHiAHQUQfoK+HhfQB4gD8Tmmt4FimpMB4xz9hKUaLVIHgmpuAV6uPjRqwiaupI2I0UMy3j/oIgKwxuloyTPRItmG0xUx0wMyUrEQMYJ52pDng4IomVDpkiIz87XudXp4hBbUWaq3CWP/91BTMACMRZx8KxbgAFi20LZotmhNrghcMX1HlCB6jLrgZmUoBWjfhQ6qnB+4auvtIrqi3q6vjFE9i1gJaz/SoYC2Vg23OlBk/kBZlcVC7XQnlD00/oAFUiZFCgnUhod595/gnPVRhgdaAZplLL5K0+xR5Oy9uHz9U5Z480xiG0se2b+Tfo6DLL9w2OkMAQmY/KDhDqHy2h4AxmC/p8dyyYn+XxBCFH1z6ovLUvr9Pdrik9gsIoHs8qaqEMZTKc8YBSRXmVxdsoB54MZ+RRPIy3xtroWchySmEYzOJG5A/XJxf6vIpSund78G4aMQklxjvQTFqL4AIPjy0H++uQAVDkgQs8OCoZyQDasrADxG6FSFVkyij4AsWAx8H+rOaJJwhbWKkGMEy9ytMJzarOqhpibbGXKI7ivDJu8oqqBwLWHS40yz4zgtYjXHQGY3oldMNmjk5YKNM7q7S+AIm5ZbHMoitiIfqMCoQ1DgfBK5wq1VN8pzv1QYVdE1RhFYocYifetvBmtN/BRaM+lJVtXEGTyb4g/+AHVZWMdQYWdZ2K19UZhflSCvaxh+xRLT/2YW8Ei74iwBZrL9LCd3xXhtVi/bTbPa2X8oMh54VO/JR9XL0xFoST88Uib/VwNRbDuhtRpWSg9c321weq4i+zgUiiq/1Mrb2wTrdKNeYbfaS1ZriMaN22G8SGz5rff5hyUGbo5DkN+jxxlPv2M83gNhzvUPHEoAHRzf1Vr3fV6BQYOU901StVxTQmIft49zIajb5dP7O6s9BHC0X6EetmZXO8vOqlao7zjm2Folf67Mz2Tl6frnpfOPNznjhPahC9Lpq81Ro3FwwbOyELBd9nVuaO4TG8aKrgL1joQd1rluoOFTLAMJv6jFVmhMuL/2I9OQXUVhugYHPnJ6hzKcV9y+gYpqi1HfMe+WAaTdjckYDtPHB2WxFUqu+Ztd9cFHilOAF2+a2SJJC8/YZSWUIG2FbbjygcZNkJ2GW21bEsBVThq5CBE3EsuxpLEHRDFuHeZ2fYMBngpZ5G4CDLSz2NzoFaJxZ1DuwD2WlCsxZdENyhPCX48FitF4vl8cMsR4+KnUBE0VS+1bF46hXyP2r9iM4U15jPKckEYHm9Ipia0gEDVd3NXiPrwngvwy6iIehGFEBqdbjFOF25Dk8UFJ7FFXGIctvgvlGXJsBQTj66t2UtcSxJXzSGB8wg4KfkbJNRYg8YyMdsD3gj7fzG8YtZKOfZ7i/GmKp2hLKEw0vxTfrH4iOdAEd34vZ02Q15+vtWnz+7iVqL2aHx7EDYn67gMJ1iLk6HJscJnj9/3a2VFFpXgJvscDKPJ8fe8iSXAJ9oR3ghAZlrpc7JXXbXFc1wh8GZJqBgFs5TaRV7xautmaRVRD7UnLzVmOOxjP0Zt9aOk3u3f+GzGhCpZZ5N8eN7htWAKJN9/KaQchqi26cbEOluLsytABRUp7/4679/L/BfXsPkXsdjKOaC48c7VV4rn1ZrrmsSXauMoL+z61YGpdhvWW/1Xm1v7DXOgrcF3/H2zqPd4PbobmPSsHr68Cfdoa6jNa3eyeeCJWbM15QxmMWFybOFRVH8Ngn+uIfnHc/xC9P5WZbte/aFfIcVoVlvbw5rWuDHG5XacNCuNyNuPzT2rxqXJ5bjOP7x3s25uLs5Dz9G1w+PG0GAYuPn3fVX5fVPoHza7te08cS03KBIxOXJFNRYBWBn9zedk8J4fusHl41e1J7oKWBFiEJZVIq3B5nFolAWleLtQero+An/KeID9BEw0pd+JgDZuiZzjt6hn/rHQz0nq3Tqs7J6U7wRdtqaaejifhvgTVepQfS26A7DuIQ4eRwWpqXa+O1QLi5ijyIduwVaF6VvXn07bJpETEjU+gemti9RB5wCAWW3c/P3Ye5p+srDNwTq9sDjALXyXrpRVgoCQ5TeXmPFelHZ15LdaVJA4HxGXacKfHHuQqqM3xi4ckAzK0XSMjrN4UOcVAjeGrgjuGaYZq5d6jab3VIbv/JSS1+DngB2GK+smaaUMk9opZ0cU0RGN1KGVKxGBCkkYL/SiQ21iscUUaHwesUZAxGKr1NEgaocpAwkh6Y4nXEKt/q773OVscV6dRaE/i4v4P7IKNEl6yQMN5dao0mjPODny+pmJfWJ3wM7VWYC/9hdHqYEvBvqfW2RU6oZk6zSXDE9H3hXlJvFzVxl8rJdrZLbLHbTlKHfg/LWGEsnKqdIkSLF/yP+BziP3a9mBJszAAAAAElFTkSuQmCC" alt=""></img>
            </a>
            
            <div className="flex -mx-2">
                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 " aria-label="Reddit">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                        </path>
                    </svg>
                </a>

                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 " aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a>

                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 " aria-label="Github">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer

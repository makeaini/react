import ThemeContext from "./context/theme-context"
function HomeBanner() {
    return (
        <div>
            {/***函数中取context中的数据，通过回调拿到共享数据 */}
            {
                <ThemeContext.Consumer>
                    {
                        value => {
                            return (<h2>{value.color}</h2>)
                        }
                    }
                </ThemeContext.Consumer>
            }
        </div>)
}
export default HomeBanner
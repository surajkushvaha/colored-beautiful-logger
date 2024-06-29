/**
 * Enum representing different colors.
 */
export declare enum Color {
    BLACK = "\u001B[30m",
    RED = "\u001B[31m",
    GREEN = "\u001B[32m",
    YELLOW = "\u001B[33m",
    BLUE = "\u001B[34m",
    MAGNENTA = "\u001B[35m",
    CYAN = "\u001B[36m",
    WHITE = "\u001B[37m",
    BLACKBG = "\u001B[40m",
    REDBG = "\u001B[41m",
    GREENBG = "\u001B[42m",
    YELLOWBG = "\u001B[43m",
    BLUEBG = "\u001B[44m",
    MEGENTABG = "\u001B[45m",
    CYANBG = "\u001B[46m",
    WHITEBG = "\u001B[47m",
    RESET = "\u001B[0m",
    "\x1b[38;5;0m" = "\u001B[38;5;0m",
    "\x1b[38;5;1m" = "\u001B[38;5;1m",
    "\x1b[38;5;2m" = "\u001B[38;5;2m",
    "\x1b[38;5;3m" = "\u001B[38;5;3m",
    "\x1b[38;5;4m" = "\u001B[38;5;4m",
    "\x1b[38;5;5m" = "\u001B[38;5;5m",
    "\x1b[38;5;6m" = "\u001B[38;5;6m",
    "\x1b[38;5;7m" = "\u001B[38;5;7m",
    "\x1b[38;5;8m" = "\u001B[38;5;8m",
    "\x1b[38;5;9m" = "\u001B[38;5;9m",
    "\x1b[38;5;10m" = "\u001B[38;5;10m",
    "\x1b[38;5;11m" = "\u001B[38;5;11m",
    "\x1b[38;5;12m" = "\u001B[38;5;12m",
    "\x1b[38;5;13m" = "\u001B[38;5;13m",
    "\x1b[38;5;14m" = "\u001B[38;5;14m",
    "\x1b[38;5;15m" = "\u001B[38;5;15m",
    "\x1b[38;5;16m" = "\u001B[38;5;16m",
    "\x1b[38;5;17m" = "\u001B[38;5;17m",
    "\x1b[38;5;18m" = "\u001B[38;5;18m",
    "\x1b[38;5;19m" = "\u001B[38;5;19m",
    "\x1b[38;5;20m" = "\u001B[38;5;20m",
    "\x1b[38;5;21m" = "\u001B[38;5;21m",
    "\x1b[38;5;22m" = "\u001B[38;5;22m",
    "\x1b[38;5;23m" = "\u001B[38;5;23m",
    "\x1b[38;5;24m" = "\u001B[38;5;24m",
    "\x1b[38;5;25m" = "\u001B[38;5;25m",
    "\x1b[38;5;26m" = "\u001B[38;5;26m",
    "\x1b[38;5;27m" = "\u001B[38;5;27m",
    "\x1b[38;5;28m" = "\u001B[38;5;28m",
    "\x1b[38;5;29m" = "\u001B[38;5;29m",
    "\x1b[38;5;30m" = "\u001B[38;5;30m",
    "\x1b[38;5;31m" = "\u001B[38;5;31m",
    "\x1b[38;5;32m" = "\u001B[38;5;32m",
    "\x1b[38;5;33m" = "\u001B[38;5;33m",
    "\x1b[38;5;34m" = "\u001B[38;5;34m",
    "\x1b[38;5;35m" = "\u001B[38;5;35m",
    "\x1b[38;5;36m" = "\u001B[38;5;36m",
    "\x1b[38;5;37m" = "\u001B[38;5;37m",
    "\x1b[38;5;38m" = "\u001B[38;5;38m",
    "\x1b[38;5;39m" = "\u001B[38;5;39m",
    "\x1b[38;5;40m" = "\u001B[38;5;40m",
    "\x1b[38;5;41m" = "\u001B[38;5;41m",
    "\x1b[38;5;42m" = "\u001B[38;5;42m",
    "\x1b[38;5;43m" = "\u001B[38;5;43m",
    "\x1b[38;5;44m" = "\u001B[38;5;44m",
    "\x1b[38;5;45m" = "\u001B[38;5;45m",
    "\x1b[38;5;46m" = "\u001B[38;5;46m",
    "\x1b[38;5;47m" = "\u001B[38;5;47m",
    "\x1b[38;5;48m" = "\u001B[38;5;48m",
    "\x1b[38;5;49m" = "\u001B[38;5;49m",
    "\x1b[38;5;50m" = "\u001B[38;5;50m",
    "\x1b[38;5;51m" = "\u001B[38;5;51m",
    "\x1b[38;5;52m" = "\u001B[38;5;52m",
    "\x1b[38;5;53m" = "\u001B[38;5;53m",
    "\x1b[38;5;54m" = "\u001B[38;5;54m",
    "\x1b[38;5;55m" = "\u001B[38;5;55m",
    "\x1b[38;5;56m" = "\u001B[38;5;56m",
    "\x1b[38;5;57m" = "\u001B[38;5;57m",
    "\x1b[38;5;58m" = "\u001B[38;5;58m",
    "\x1b[38;5;59m" = "\u001B[38;5;59m",
    "\x1b[38;5;60m" = "\u001B[38;5;60m",
    "\x1b[38;5;61m" = "\u001B[38;5;61m",
    "\x1b[38;5;62m" = "\u001B[38;5;62m",
    "\x1b[38;5;63m" = "\u001B[38;5;63m",
    "\x1b[38;5;64m" = "\u001B[38;5;64m",
    "\x1b[38;5;65m" = "\u001B[38;5;65m",
    "\x1b[38;5;66m" = "\u001B[38;5;66m",
    "\x1b[38;5;67m" = "\u001B[38;5;67m",
    "\x1b[38;5;68m" = "\u001B[38;5;68m",
    "\x1b[38;5;69m" = "\u001B[38;5;69m",
    "\x1b[38;5;70m" = "\u001B[38;5;70m",
    "\x1b[38;5;71m" = "\u001B[38;5;71m",
    "\x1b[38;5;72m" = "\u001B[38;5;72m",
    "\x1b[38;5;73m" = "\u001B[38;5;73m",
    "\x1b[38;5;74m" = "\u001B[38;5;74m",
    "\x1b[38;5;75m" = "\u001B[38;5;75m",
    "\x1b[38;5;76m" = "\u001B[38;5;76m",
    "\x1b[38;5;77m" = "\u001B[38;5;77m",
    "\x1b[38;5;78m" = "\u001B[38;5;78m",
    "\x1b[38;5;79m" = "\u001B[38;5;79m",
    "\x1b[38;5;80m" = "\u001B[38;5;80m",
    "\x1b[38;5;81m" = "\u001B[38;5;81m",
    "\x1b[38;5;82m" = "\u001B[38;5;82m",
    "\x1b[38;5;83m" = "\u001B[38;5;83m",
    "\x1b[38;5;84m" = "\u001B[38;5;84m",
    "\x1b[38;5;85m" = "\u001B[38;5;85m",
    "\x1b[38;5;86m" = "\u001B[38;5;86m",
    "\x1b[38;5;87m" = "\u001B[38;5;87m",
    "\x1b[38;5;88m" = "\u001B[38;5;88m",
    "\x1b[38;5;89m" = "\u001B[38;5;89m",
    "\x1b[38;5;90m" = "\u001B[38;5;90m",
    "\x1b[38;5;91m" = "\u001B[38;5;91m",
    "\x1b[38;5;92m" = "\u001B[38;5;92m",
    "\x1b[38;5;93m" = "\u001B[38;5;93m",
    "\x1b[38;5;94m" = "\u001B[38;5;94m",
    "\x1b[38;5;95m" = "\u001B[38;5;95m",
    "\x1b[38;5;96m" = "\u001B[38;5;96m",
    "\x1b[38;5;97m" = "\u001B[38;5;97m",
    "\x1b[38;5;98m" = "\u001B[38;5;98m",
    "\x1b[38;5;99m" = "\u001B[38;5;99m",
    "\x1b[38;5;100m" = "\u001B[38;5;100m",
    "\x1b[38;5;101m" = "\u001B[38;5;101m",
    "\x1b[38;5;102m" = "\u001B[38;5;102m",
    "\x1b[38;5;103m" = "\u001B[38;5;103m",
    "\x1b[38;5;104m" = "\u001B[38;5;104m",
    "\x1b[38;5;105m" = "\u001B[38;5;105m",
    "\x1b[38;5;106m" = "\u001B[38;5;106m",
    "\x1b[38;5;107m" = "\u001B[38;5;107m",
    "\x1b[38;5;108m" = "\u001B[38;5;108m",
    "\x1b[38;5;109m" = "\u001B[38;5;109m",
    "\x1b[38;5;110m" = "\u001B[38;5;110m",
    "\x1b[38;5;111m" = "\u001B[38;5;111m",
    "\x1b[38;5;112m" = "\u001B[38;5;112m",
    "\x1b[38;5;113m" = "\u001B[38;5;113m",
    "\x1b[38;5;114m" = "\u001B[38;5;114m",
    "\x1b[38;5;115m" = "\u001B[38;5;115m",
    "\x1b[38;5;116m" = "\u001B[38;5;116m",
    "\x1b[38;5;117m" = "\u001B[38;5;117m",
    "\x1b[38;5;118m" = "\u001B[38;5;118m",
    "\x1b[38;5;119m" = "\u001B[38;5;119m",
    "\x1b[38;5;120m" = "\u001B[38;5;120m",
    "\x1b[38;5;121m" = "\u001B[38;5;121m",
    "\x1b[38;5;122m" = "\u001B[38;5;122m",
    "\x1b[38;5;123m" = "\u001B[38;5;123m",
    "\x1b[38;5;124m" = "\u001B[38;5;124m",
    "\x1b[38;5;125m" = "\u001B[38;5;125m",
    "\x1b[38;5;126m" = "\u001B[38;5;126m",
    "\x1b[38;5;127m" = "\u001B[38;5;127m",
    "\x1b[38;5;128m" = "\u001B[38;5;128m",
    "\x1b[38;5;129m" = "\u001B[38;5;129m",
    "\x1b[38;5;130m" = "\u001B[38;5;130m",
    "\x1b[38;5;131m" = "\u001B[38;5;131m",
    "\x1b[38;5;132m" = "\u001B[38;5;132m",
    "\x1b[38;5;133m" = "\u001B[38;5;133m",
    "\x1b[38;5;134m" = "\u001B[38;5;134m",
    "\x1b[38;5;135m" = "\u001B[38;5;135m",
    "\x1b[38;5;136m" = "\u001B[38;5;136m",
    "\x1b[38;5;137m" = "\u001B[38;5;137m",
    "\x1b[38;5;138m" = "\u001B[38;5;138m",
    "\x1b[38;5;139m" = "\u001B[38;5;139m",
    "\x1b[38;5;140m" = "\u001B[38;5;140m",
    "\x1b[38;5;141m" = "\u001B[38;5;141m",
    "\x1b[38;5;142m" = "\u001B[38;5;142m",
    "\x1b[38;5;143m" = "\u001B[38;5;143m",
    "\x1b[38;5;144m" = "\u001B[38;5;144m",
    "\x1b[38;5;145m" = "\u001B[38;5;145m",
    "\x1b[38;5;146m" = "\u001B[38;5;146m",
    "\x1b[38;5;147m" = "\u001B[38;5;147m",
    "\x1b[38;5;148m" = "\u001B[38;5;148m",
    "\x1b[38;5;149m" = "\u001B[38;5;149m",
    "\x1b[38;5;150m" = "\u001B[38;5;150m",
    "\x1b[38;5;151m" = "\u001B[38;5;151m",
    "\x1b[38;5;152m" = "\u001B[38;5;152m",
    "\x1b[38;5;153m" = "\u001B[38;5;153m",
    "\x1b[38;5;154m" = "\u001B[38;5;154m",
    "\x1b[38;5;155m" = "\u001B[38;5;155m",
    "\x1b[38;5;156m" = "\u001B[38;5;156m",
    "\x1b[38;5;157m" = "\u001B[38;5;157m",
    "\x1b[38;5;158m" = "\u001B[38;5;158m",
    "\x1b[38;5;159m" = "\u001B[38;5;159m",
    "\x1b[38;5;160m" = "\u001B[38;5;160m",
    "\x1b[38;5;161m" = "\u001B[38;5;161m",
    "\x1b[38;5;162m" = "\u001B[38;5;162m",
    "\x1b[38;5;163m" = "\u001B[38;5;163m",
    "\x1b[38;5;164m" = "\u001B[38;5;164m",
    "\x1b[38;5;165m" = "\u001B[38;5;165m",
    "\x1b[38;5;166m" = "\u001B[38;5;166m",
    "\x1b[38;5;167m" = "\u001B[38;5;167m",
    "\x1b[38;5;168m" = "\u001B[38;5;168m",
    "\x1b[38;5;169m" = "\u001B[38;5;169m",
    "\x1b[38;5;170m" = "\u001B[38;5;170m",
    "\x1b[38;5;171m" = "\u001B[38;5;171m",
    "\x1b[38;5;172m" = "\u001B[38;5;172m",
    "\x1b[38;5;173m" = "\u001B[38;5;173m",
    "\x1b[38;5;174m" = "\u001B[38;5;174m",
    "\x1b[38;5;175m" = "\u001B[38;5;175m",
    "\x1b[38;5;176m" = "\u001B[38;5;176m",
    "\x1b[38;5;177m" = "\u001B[38;5;177m",
    "\x1b[38;5;178m" = "\u001B[38;5;178m",
    "\x1b[38;5;179m" = "\u001B[38;5;179m",
    "\x1b[38;5;180m" = "\u001B[38;5;180m",
    "\x1b[38;5;181m" = "\u001B[38;5;181m",
    "\x1b[38;5;182m" = "\u001B[38;5;182m",
    "\x1b[38;5;183m" = "\u001B[38;5;183m",
    "\x1b[38;5;184m" = "\u001B[38;5;184m",
    "\x1b[38;5;185m" = "\u001B[38;5;185m",
    "\x1b[38;5;186m" = "\u001B[38;5;186m",
    "\x1b[38;5;187m" = "\u001B[38;5;187m",
    "\x1b[38;5;188m" = "\u001B[38;5;188m",
    "\x1b[38;5;189m" = "\u001B[38;5;189m",
    "\x1b[38;5;190m" = "\u001B[38;5;190m",
    "\x1b[38;5;191m" = "\u001B[38;5;191m",
    "\x1b[38;5;192m" = "\u001B[38;5;192m",
    "\x1b[38;5;193m" = "\u001B[38;5;193m",
    "\x1b[38;5;194m" = "\u001B[38;5;194m",
    "\x1b[38;5;195m" = "\u001B[38;5;195m",
    "\x1b[38;5;196m" = "\u001B[38;5;196m",
    "\x1b[38;5;197m" = "\u001B[38;5;197m",
    "\x1b[38;5;198m" = "\u001B[38;5;198m",
    "\x1b[38;5;199m" = "\u001B[38;5;199m",
    "\x1b[38;5;200m" = "\u001B[38;5;200m",
    "\x1b[38;5;201m" = "\u001B[38;5;201m",
    "\x1b[38;5;202m" = "\u001B[38;5;202m",
    "\x1b[38;5;203m" = "\u001B[38;5;203m",
    "\x1b[38;5;204m" = "\u001B[38;5;204m",
    "\x1b[38;5;205m" = "\u001B[38;5;205m",
    "\x1b[38;5;206m" = "\u001B[38;5;206m",
    "\x1b[38;5;207m" = "\u001B[38;5;207m",
    "\x1b[38;5;208m" = "\u001B[38;5;208m",
    "\x1b[38;5;209m" = "\u001B[38;5;209m",
    "\x1b[38;5;210m" = "\u001B[38;5;210m",
    "\x1b[38;5;211m" = "\u001B[38;5;211m",
    "\x1b[38;5;212m" = "\u001B[38;5;212m",
    "\x1b[38;5;213m" = "\u001B[38;5;213m",
    "\x1b[38;5;214m" = "\u001B[38;5;214m",
    "\x1b[38;5;215m" = "\u001B[38;5;215m",
    "\x1b[38;5;216m" = "\u001B[38;5;216m",
    "\x1b[38;5;217m" = "\u001B[38;5;217m",
    "\x1b[38;5;218m" = "\u001B[38;5;218m",
    "\x1b[38;5;219m" = "\u001B[38;5;219m",
    "\x1b[38;5;220m" = "\u001B[38;5;220m",
    "\x1b[38;5;221m" = "\u001B[38;5;221m",
    "\x1b[38;5;222m" = "\u001B[38;5;222m",
    "\x1b[38;5;223m" = "\u001B[38;5;223m",
    "\x1b[38;5;224m" = "\u001B[38;5;224m",
    "\x1b[38;5;225m" = "\u001B[38;5;225m",
    "\x1b[38;5;226m" = "\u001B[38;5;226m",
    "\x1b[38;5;227m" = "\u001B[38;5;227m",
    "\x1b[38;5;228m" = "\u001B[38;5;228m",
    "\x1b[38;5;229m" = "\u001B[38;5;229m",
    "\x1b[38;5;230m" = "\u001B[38;5;230m",
    "\x1b[38;5;231m" = "\u001B[38;5;231m",
    "\x1b[38;5;232m" = "\u001B[38;5;232m",
    "\x1b[38;5;233m" = "\u001B[38;5;233m",
    "\x1b[38;5;234m" = "\u001B[38;5;234m",
    "\x1b[38;5;235m" = "\u001B[38;5;235m",
    "\x1b[38;5;236m" = "\u001B[38;5;236m",
    "\x1b[38;5;237m" = "\u001B[38;5;237m",
    "\x1b[38;5;238m" = "\u001B[38;5;238m",
    "\x1b[38;5;239m" = "\u001B[38;5;239m",
    "\x1b[38;5;240m" = "\u001B[38;5;240m",
    "\x1b[38;5;241m" = "\u001B[38;5;241m",
    "\x1b[38;5;242m" = "\u001B[38;5;242m",
    "\x1b[38;5;243m" = "\u001B[38;5;243m",
    "\x1b[38;5;244m" = "\u001B[38;5;244m",
    "\x1b[38;5;245m" = "\u001B[38;5;245m",
    "\x1b[38;5;246m" = "\u001B[38;5;246m",
    "\x1b[38;5;247m" = "\u001B[38;5;247m",
    "\x1b[38;5;248m" = "\u001B[38;5;248m",
    "\x1b[38;5;249m" = "\u001B[38;5;249m",
    "\x1b[38;5;250m" = "\u001B[38;5;250m",
    "\x1b[38;5;251m" = "\u001B[38;5;251m",
    "\x1b[38;5;252m" = "\u001B[38;5;252m",
    "\x1b[38;5;253m" = "\u001B[38;5;253m",
    "\x1b[38;5;254m" = "\u001B[38;5;254m",
    "\x1b[38;5;255m" = "\u001B[38;5;255m"
}
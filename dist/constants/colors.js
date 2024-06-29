"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
/**
 * Enum representing different colors.
 */
var Color;
(function (Color) {
    Color["BLACK"] = "\u001B[30m";
    Color["RED"] = "\u001B[31m";
    Color["GREEN"] = "\u001B[32m";
    Color["YELLOW"] = "\u001B[33m";
    Color["BLUE"] = "\u001B[34m";
    Color["MAGNENTA"] = "\u001B[35m";
    Color["CYAN"] = "\u001B[36m";
    Color["WHITE"] = "\u001B[37m";
    Color["BLACKBG"] = "\u001B[40m";
    Color["REDBG"] = "\u001B[41m";
    Color["GREENBG"] = "\u001B[42m";
    Color["YELLOWBG"] = "\u001B[43m";
    Color["BLUEBG"] = "\u001B[44m";
    Color["MEGENTABG"] = "\u001B[45m";
    Color["CYANBG"] = "\u001B[46m";
    Color["WHITEBG"] = "\u001B[47m";
    Color["RESET"] = "\u001B[0m";
    Color["\u001B[38;5;0m"] = "\u001B[38;5;0m";
    Color["\u001B[38;5;1m"] = "\u001B[38;5;1m";
    Color["\u001B[38;5;2m"] = "\u001B[38;5;2m";
    Color["\u001B[38;5;3m"] = "\u001B[38;5;3m";
    Color["\u001B[38;5;4m"] = "\u001B[38;5;4m";
    Color["\u001B[38;5;5m"] = "\u001B[38;5;5m";
    Color["\u001B[38;5;6m"] = "\u001B[38;5;6m";
    Color["\u001B[38;5;7m"] = "\u001B[38;5;7m";
    Color["\u001B[38;5;8m"] = "\u001B[38;5;8m";
    Color["\u001B[38;5;9m"] = "\u001B[38;5;9m";
    Color["\u001B[38;5;10m"] = "\u001B[38;5;10m";
    Color["\u001B[38;5;11m"] = "\u001B[38;5;11m";
    Color["\u001B[38;5;12m"] = "\u001B[38;5;12m";
    Color["\u001B[38;5;13m"] = "\u001B[38;5;13m";
    Color["\u001B[38;5;14m"] = "\u001B[38;5;14m";
    Color["\u001B[38;5;15m"] = "\u001B[38;5;15m";
    Color["\u001B[38;5;16m"] = "\u001B[38;5;16m";
    Color["\u001B[38;5;17m"] = "\u001B[38;5;17m";
    Color["\u001B[38;5;18m"] = "\u001B[38;5;18m";
    Color["\u001B[38;5;19m"] = "\u001B[38;5;19m";
    Color["\u001B[38;5;20m"] = "\u001B[38;5;20m";
    Color["\u001B[38;5;21m"] = "\u001B[38;5;21m";
    Color["\u001B[38;5;22m"] = "\u001B[38;5;22m";
    Color["\u001B[38;5;23m"] = "\u001B[38;5;23m";
    Color["\u001B[38;5;24m"] = "\u001B[38;5;24m";
    Color["\u001B[38;5;25m"] = "\u001B[38;5;25m";
    Color["\u001B[38;5;26m"] = "\u001B[38;5;26m";
    Color["\u001B[38;5;27m"] = "\u001B[38;5;27m";
    Color["\u001B[38;5;28m"] = "\u001B[38;5;28m";
    Color["\u001B[38;5;29m"] = "\u001B[38;5;29m";
    Color["\u001B[38;5;30m"] = "\u001B[38;5;30m";
    Color["\u001B[38;5;31m"] = "\u001B[38;5;31m";
    Color["\u001B[38;5;32m"] = "\u001B[38;5;32m";
    Color["\u001B[38;5;33m"] = "\u001B[38;5;33m";
    Color["\u001B[38;5;34m"] = "\u001B[38;5;34m";
    Color["\u001B[38;5;35m"] = "\u001B[38;5;35m";
    Color["\u001B[38;5;36m"] = "\u001B[38;5;36m";
    Color["\u001B[38;5;37m"] = "\u001B[38;5;37m";
    Color["\u001B[38;5;38m"] = "\u001B[38;5;38m";
    Color["\u001B[38;5;39m"] = "\u001B[38;5;39m";
    Color["\u001B[38;5;40m"] = "\u001B[38;5;40m";
    Color["\u001B[38;5;41m"] = "\u001B[38;5;41m";
    Color["\u001B[38;5;42m"] = "\u001B[38;5;42m";
    Color["\u001B[38;5;43m"] = "\u001B[38;5;43m";
    Color["\u001B[38;5;44m"] = "\u001B[38;5;44m";
    Color["\u001B[38;5;45m"] = "\u001B[38;5;45m";
    Color["\u001B[38;5;46m"] = "\u001B[38;5;46m";
    Color["\u001B[38;5;47m"] = "\u001B[38;5;47m";
    Color["\u001B[38;5;48m"] = "\u001B[38;5;48m";
    Color["\u001B[38;5;49m"] = "\u001B[38;5;49m";
    Color["\u001B[38;5;50m"] = "\u001B[38;5;50m";
    Color["\u001B[38;5;51m"] = "\u001B[38;5;51m";
    Color["\u001B[38;5;52m"] = "\u001B[38;5;52m";
    Color["\u001B[38;5;53m"] = "\u001B[38;5;53m";
    Color["\u001B[38;5;54m"] = "\u001B[38;5;54m";
    Color["\u001B[38;5;55m"] = "\u001B[38;5;55m";
    Color["\u001B[38;5;56m"] = "\u001B[38;5;56m";
    Color["\u001B[38;5;57m"] = "\u001B[38;5;57m";
    Color["\u001B[38;5;58m"] = "\u001B[38;5;58m";
    Color["\u001B[38;5;59m"] = "\u001B[38;5;59m";
    Color["\u001B[38;5;60m"] = "\u001B[38;5;60m";
    Color["\u001B[38;5;61m"] = "\u001B[38;5;61m";
    Color["\u001B[38;5;62m"] = "\u001B[38;5;62m";
    Color["\u001B[38;5;63m"] = "\u001B[38;5;63m";
    Color["\u001B[38;5;64m"] = "\u001B[38;5;64m";
    Color["\u001B[38;5;65m"] = "\u001B[38;5;65m";
    Color["\u001B[38;5;66m"] = "\u001B[38;5;66m";
    Color["\u001B[38;5;67m"] = "\u001B[38;5;67m";
    Color["\u001B[38;5;68m"] = "\u001B[38;5;68m";
    Color["\u001B[38;5;69m"] = "\u001B[38;5;69m";
    Color["\u001B[38;5;70m"] = "\u001B[38;5;70m";
    Color["\u001B[38;5;71m"] = "\u001B[38;5;71m";
    Color["\u001B[38;5;72m"] = "\u001B[38;5;72m";
    Color["\u001B[38;5;73m"] = "\u001B[38;5;73m";
    Color["\u001B[38;5;74m"] = "\u001B[38;5;74m";
    Color["\u001B[38;5;75m"] = "\u001B[38;5;75m";
    Color["\u001B[38;5;76m"] = "\u001B[38;5;76m";
    Color["\u001B[38;5;77m"] = "\u001B[38;5;77m";
    Color["\u001B[38;5;78m"] = "\u001B[38;5;78m";
    Color["\u001B[38;5;79m"] = "\u001B[38;5;79m";
    Color["\u001B[38;5;80m"] = "\u001B[38;5;80m";
    Color["\u001B[38;5;81m"] = "\u001B[38;5;81m";
    Color["\u001B[38;5;82m"] = "\u001B[38;5;82m";
    Color["\u001B[38;5;83m"] = "\u001B[38;5;83m";
    Color["\u001B[38;5;84m"] = "\u001B[38;5;84m";
    Color["\u001B[38;5;85m"] = "\u001B[38;5;85m";
    Color["\u001B[38;5;86m"] = "\u001B[38;5;86m";
    Color["\u001B[38;5;87m"] = "\u001B[38;5;87m";
    Color["\u001B[38;5;88m"] = "\u001B[38;5;88m";
    Color["\u001B[38;5;89m"] = "\u001B[38;5;89m";
    Color["\u001B[38;5;90m"] = "\u001B[38;5;90m";
    Color["\u001B[38;5;91m"] = "\u001B[38;5;91m";
    Color["\u001B[38;5;92m"] = "\u001B[38;5;92m";
    Color["\u001B[38;5;93m"] = "\u001B[38;5;93m";
    Color["\u001B[38;5;94m"] = "\u001B[38;5;94m";
    Color["\u001B[38;5;95m"] = "\u001B[38;5;95m";
    Color["\u001B[38;5;96m"] = "\u001B[38;5;96m";
    Color["\u001B[38;5;97m"] = "\u001B[38;5;97m";
    Color["\u001B[38;5;98m"] = "\u001B[38;5;98m";
    Color["\u001B[38;5;99m"] = "\u001B[38;5;99m";
    Color["\u001B[38;5;100m"] = "\u001B[38;5;100m";
    Color["\u001B[38;5;101m"] = "\u001B[38;5;101m";
    Color["\u001B[38;5;102m"] = "\u001B[38;5;102m";
    Color["\u001B[38;5;103m"] = "\u001B[38;5;103m";
    Color["\u001B[38;5;104m"] = "\u001B[38;5;104m";
    Color["\u001B[38;5;105m"] = "\u001B[38;5;105m";
    Color["\u001B[38;5;106m"] = "\u001B[38;5;106m";
    Color["\u001B[38;5;107m"] = "\u001B[38;5;107m";
    Color["\u001B[38;5;108m"] = "\u001B[38;5;108m";
    Color["\u001B[38;5;109m"] = "\u001B[38;5;109m";
    Color["\u001B[38;5;110m"] = "\u001B[38;5;110m";
    Color["\u001B[38;5;111m"] = "\u001B[38;5;111m";
    Color["\u001B[38;5;112m"] = "\u001B[38;5;112m";
    Color["\u001B[38;5;113m"] = "\u001B[38;5;113m";
    Color["\u001B[38;5;114m"] = "\u001B[38;5;114m";
    Color["\u001B[38;5;115m"] = "\u001B[38;5;115m";
    Color["\u001B[38;5;116m"] = "\u001B[38;5;116m";
    Color["\u001B[38;5;117m"] = "\u001B[38;5;117m";
    Color["\u001B[38;5;118m"] = "\u001B[38;5;118m";
    Color["\u001B[38;5;119m"] = "\u001B[38;5;119m";
    Color["\u001B[38;5;120m"] = "\u001B[38;5;120m";
    Color["\u001B[38;5;121m"] = "\u001B[38;5;121m";
    Color["\u001B[38;5;122m"] = "\u001B[38;5;122m";
    Color["\u001B[38;5;123m"] = "\u001B[38;5;123m";
    Color["\u001B[38;5;124m"] = "\u001B[38;5;124m";
    Color["\u001B[38;5;125m"] = "\u001B[38;5;125m";
    Color["\u001B[38;5;126m"] = "\u001B[38;5;126m";
    Color["\u001B[38;5;127m"] = "\u001B[38;5;127m";
    Color["\u001B[38;5;128m"] = "\u001B[38;5;128m";
    Color["\u001B[38;5;129m"] = "\u001B[38;5;129m";
    Color["\u001B[38;5;130m"] = "\u001B[38;5;130m";
    Color["\u001B[38;5;131m"] = "\u001B[38;5;131m";
    Color["\u001B[38;5;132m"] = "\u001B[38;5;132m";
    Color["\u001B[38;5;133m"] = "\u001B[38;5;133m";
    Color["\u001B[38;5;134m"] = "\u001B[38;5;134m";
    Color["\u001B[38;5;135m"] = "\u001B[38;5;135m";
    Color["\u001B[38;5;136m"] = "\u001B[38;5;136m";
    Color["\u001B[38;5;137m"] = "\u001B[38;5;137m";
    Color["\u001B[38;5;138m"] = "\u001B[38;5;138m";
    Color["\u001B[38;5;139m"] = "\u001B[38;5;139m";
    Color["\u001B[38;5;140m"] = "\u001B[38;5;140m";
    Color["\u001B[38;5;141m"] = "\u001B[38;5;141m";
    Color["\u001B[38;5;142m"] = "\u001B[38;5;142m";
    Color["\u001B[38;5;143m"] = "\u001B[38;5;143m";
    Color["\u001B[38;5;144m"] = "\u001B[38;5;144m";
    Color["\u001B[38;5;145m"] = "\u001B[38;5;145m";
    Color["\u001B[38;5;146m"] = "\u001B[38;5;146m";
    Color["\u001B[38;5;147m"] = "\u001B[38;5;147m";
    Color["\u001B[38;5;148m"] = "\u001B[38;5;148m";
    Color["\u001B[38;5;149m"] = "\u001B[38;5;149m";
    Color["\u001B[38;5;150m"] = "\u001B[38;5;150m";
    Color["\u001B[38;5;151m"] = "\u001B[38;5;151m";
    Color["\u001B[38;5;152m"] = "\u001B[38;5;152m";
    Color["\u001B[38;5;153m"] = "\u001B[38;5;153m";
    Color["\u001B[38;5;154m"] = "\u001B[38;5;154m";
    Color["\u001B[38;5;155m"] = "\u001B[38;5;155m";
    Color["\u001B[38;5;156m"] = "\u001B[38;5;156m";
    Color["\u001B[38;5;157m"] = "\u001B[38;5;157m";
    Color["\u001B[38;5;158m"] = "\u001B[38;5;158m";
    Color["\u001B[38;5;159m"] = "\u001B[38;5;159m";
    Color["\u001B[38;5;160m"] = "\u001B[38;5;160m";
    Color["\u001B[38;5;161m"] = "\u001B[38;5;161m";
    Color["\u001B[38;5;162m"] = "\u001B[38;5;162m";
    Color["\u001B[38;5;163m"] = "\u001B[38;5;163m";
    Color["\u001B[38;5;164m"] = "\u001B[38;5;164m";
    Color["\u001B[38;5;165m"] = "\u001B[38;5;165m";
    Color["\u001B[38;5;166m"] = "\u001B[38;5;166m";
    Color["\u001B[38;5;167m"] = "\u001B[38;5;167m";
    Color["\u001B[38;5;168m"] = "\u001B[38;5;168m";
    Color["\u001B[38;5;169m"] = "\u001B[38;5;169m";
    Color["\u001B[38;5;170m"] = "\u001B[38;5;170m";
    Color["\u001B[38;5;171m"] = "\u001B[38;5;171m";
    Color["\u001B[38;5;172m"] = "\u001B[38;5;172m";
    Color["\u001B[38;5;173m"] = "\u001B[38;5;173m";
    Color["\u001B[38;5;174m"] = "\u001B[38;5;174m";
    Color["\u001B[38;5;175m"] = "\u001B[38;5;175m";
    Color["\u001B[38;5;176m"] = "\u001B[38;5;176m";
    Color["\u001B[38;5;177m"] = "\u001B[38;5;177m";
    Color["\u001B[38;5;178m"] = "\u001B[38;5;178m";
    Color["\u001B[38;5;179m"] = "\u001B[38;5;179m";
    Color["\u001B[38;5;180m"] = "\u001B[38;5;180m";
    Color["\u001B[38;5;181m"] = "\u001B[38;5;181m";
    Color["\u001B[38;5;182m"] = "\u001B[38;5;182m";
    Color["\u001B[38;5;183m"] = "\u001B[38;5;183m";
    Color["\u001B[38;5;184m"] = "\u001B[38;5;184m";
    Color["\u001B[38;5;185m"] = "\u001B[38;5;185m";
    Color["\u001B[38;5;186m"] = "\u001B[38;5;186m";
    Color["\u001B[38;5;187m"] = "\u001B[38;5;187m";
    Color["\u001B[38;5;188m"] = "\u001B[38;5;188m";
    Color["\u001B[38;5;189m"] = "\u001B[38;5;189m";
    Color["\u001B[38;5;190m"] = "\u001B[38;5;190m";
    Color["\u001B[38;5;191m"] = "\u001B[38;5;191m";
    Color["\u001B[38;5;192m"] = "\u001B[38;5;192m";
    Color["\u001B[38;5;193m"] = "\u001B[38;5;193m";
    Color["\u001B[38;5;194m"] = "\u001B[38;5;194m";
    Color["\u001B[38;5;195m"] = "\u001B[38;5;195m";
    Color["\u001B[38;5;196m"] = "\u001B[38;5;196m";
    Color["\u001B[38;5;197m"] = "\u001B[38;5;197m";
    Color["\u001B[38;5;198m"] = "\u001B[38;5;198m";
    Color["\u001B[38;5;199m"] = "\u001B[38;5;199m";
    Color["\u001B[38;5;200m"] = "\u001B[38;5;200m";
    Color["\u001B[38;5;201m"] = "\u001B[38;5;201m";
    Color["\u001B[38;5;202m"] = "\u001B[38;5;202m";
    Color["\u001B[38;5;203m"] = "\u001B[38;5;203m";
    Color["\u001B[38;5;204m"] = "\u001B[38;5;204m";
    Color["\u001B[38;5;205m"] = "\u001B[38;5;205m";
    Color["\u001B[38;5;206m"] = "\u001B[38;5;206m";
    Color["\u001B[38;5;207m"] = "\u001B[38;5;207m";
    Color["\u001B[38;5;208m"] = "\u001B[38;5;208m";
    Color["\u001B[38;5;209m"] = "\u001B[38;5;209m";
    Color["\u001B[38;5;210m"] = "\u001B[38;5;210m";
    Color["\u001B[38;5;211m"] = "\u001B[38;5;211m";
    Color["\u001B[38;5;212m"] = "\u001B[38;5;212m";
    Color["\u001B[38;5;213m"] = "\u001B[38;5;213m";
    Color["\u001B[38;5;214m"] = "\u001B[38;5;214m";
    Color["\u001B[38;5;215m"] = "\u001B[38;5;215m";
    Color["\u001B[38;5;216m"] = "\u001B[38;5;216m";
    Color["\u001B[38;5;217m"] = "\u001B[38;5;217m";
    Color["\u001B[38;5;218m"] = "\u001B[38;5;218m";
    Color["\u001B[38;5;219m"] = "\u001B[38;5;219m";
    Color["\u001B[38;5;220m"] = "\u001B[38;5;220m";
    Color["\u001B[38;5;221m"] = "\u001B[38;5;221m";
    Color["\u001B[38;5;222m"] = "\u001B[38;5;222m";
    Color["\u001B[38;5;223m"] = "\u001B[38;5;223m";
    Color["\u001B[38;5;224m"] = "\u001B[38;5;224m";
    Color["\u001B[38;5;225m"] = "\u001B[38;5;225m";
    Color["\u001B[38;5;226m"] = "\u001B[38;5;226m";
    Color["\u001B[38;5;227m"] = "\u001B[38;5;227m";
    Color["\u001B[38;5;228m"] = "\u001B[38;5;228m";
    Color["\u001B[38;5;229m"] = "\u001B[38;5;229m";
    Color["\u001B[38;5;230m"] = "\u001B[38;5;230m";
    Color["\u001B[38;5;231m"] = "\u001B[38;5;231m";
    Color["\u001B[38;5;232m"] = "\u001B[38;5;232m";
    Color["\u001B[38;5;233m"] = "\u001B[38;5;233m";
    Color["\u001B[38;5;234m"] = "\u001B[38;5;234m";
    Color["\u001B[38;5;235m"] = "\u001B[38;5;235m";
    Color["\u001B[38;5;236m"] = "\u001B[38;5;236m";
    Color["\u001B[38;5;237m"] = "\u001B[38;5;237m";
    Color["\u001B[38;5;238m"] = "\u001B[38;5;238m";
    Color["\u001B[38;5;239m"] = "\u001B[38;5;239m";
    Color["\u001B[38;5;240m"] = "\u001B[38;5;240m";
    Color["\u001B[38;5;241m"] = "\u001B[38;5;241m";
    Color["\u001B[38;5;242m"] = "\u001B[38;5;242m";
    Color["\u001B[38;5;243m"] = "\u001B[38;5;243m";
    Color["\u001B[38;5;244m"] = "\u001B[38;5;244m";
    Color["\u001B[38;5;245m"] = "\u001B[38;5;245m";
    Color["\u001B[38;5;246m"] = "\u001B[38;5;246m";
    Color["\u001B[38;5;247m"] = "\u001B[38;5;247m";
    Color["\u001B[38;5;248m"] = "\u001B[38;5;248m";
    Color["\u001B[38;5;249m"] = "\u001B[38;5;249m";
    Color["\u001B[38;5;250m"] = "\u001B[38;5;250m";
    Color["\u001B[38;5;251m"] = "\u001B[38;5;251m";
    Color["\u001B[38;5;252m"] = "\u001B[38;5;252m";
    Color["\u001B[38;5;253m"] = "\u001B[38;5;253m";
    Color["\u001B[38;5;254m"] = "\u001B[38;5;254m";
    Color["\u001B[38;5;255m"] = "\u001B[38;5;255m";
})(Color || (exports.Color = Color = {}));

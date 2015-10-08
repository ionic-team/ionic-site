System.register('rxjs/src/Rx', ['./Subject', './schedulers/VirtualTimeScheduler', './schedulers/TestScheduler', './schedulers/immediate', './schedulers/nextTick', './Observable', './Subscriber', './Subscription', './Notification', './subjects/ReplaySubject', './subjects/BehaviorSubject', './observables/ConnectableObservable', './observables/ArrayObservable', './observables/DeferObservable', './observables/EmptyObservable', './observables/ErrorObservable', './observables/InfiniteObservable', './observables/IntervalObservable', './observables/PromiseObservable', './observables/RangeObservable', './observables/TimerObservable', './observables/FromEventPatternObservable', './observables/FromEventObservable', './observables/ForkJoinObservable', './observables/FromObservable', './operators/concat-static', './operators/concat', './operators/concatAll', './operators/concatMap', './operators/concatMapTo', './operators/merge', './operators/merge-static', './operators/mergeAll', './operators/flatMap', './operators/flatMapTo', './operators/switchAll', './operators/switchLatest', './operators/switchLatestTo', './operators/expand', './operators/do', './operators/map', './operators/mapTo', './operators/toArray', './operators/count', './operators/scan', './operators/reduce', './operators/startWith', './operators/take', './operators/skip', './operators/skipUntil', './operators/takeUntil', './operators/filter', './operators/distinctUntilChanged', './operators/distinctUntilKeyChanged', './operators/combineLatest', './operators/combineLatest-static', './operators/combineAll', './operators/withLatestFrom', './operators/zip', './operators/zip-static', './operators/zipAll', './operators/publish', './operators/publishBehavior', './operators/publishReplay', './operators/multicast', './operators/observeOn', './operators/subscribeOn', './operators/partition', './operators/toPromise', './operators/defaultIfEmpty', './operators/materialize', './operators/catch', './operators/retry', './operators/retryWhen', './operators/repeat', './operators/finally', './operators/timeout', './operators/timeoutWith', './operators/groupBy', './operators/window', './operators/windowWhen', './operators/windowToggle', './operators/windowTime', './operators/windowCount', './operators/delay', './operators/throttle', './operators/debounce', './operators/buffer', './operators/bufferCount', './operators/bufferTime', './operators/bufferToggle', './operators/bufferWhen', './operators/sample', './operators/sampleTime'], function (_export) {
    'use strict';

    var Subject, VirtualTimeScheduler, TestScheduler, immediate, nextTick, Observable, Subscriber, Subscription, Notification, ReplaySubject, BehaviorSubject, ConnectableObservable, ArrayObservable, DeferObservable, EmptyObservable, ErrorObservable, InfiniteObservable, IntervalObservable, PromiseObservable, RangeObservable, TimerObservable, FromEventPatternObservable, FromEventObservable, ForkJoinObservable, FromObservable, concat, concatProto, concatAll, concatMap, concatMapTo, mergeProto, merge, mergeAll, flatMap, flatMapTo, switchAll, switchLatest, switchLatestTo, expand, _do, map, mapTo, toArray, count, scan, reduce, startWith, take, skip, skipUntil, takeUntil, filter, distinctUntilChanged, distinctUntilKeyChanged, combineLatestProto, combineLatest, combineAll, withLatestFrom, zipProto, zip, zipAll, publish, publishBehavior, publishReplay, multicast, observeOn, subscribeOn, partition, toPromise, defaultIfEmpty, materialize, _catch, retry, retryWhen, repeat, _finally, timeout, timeoutWith, groupBy, window, windowWhen, windowToggle, windowTime, windowCount, delay, throttle, debounce, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, sample, sampleTime, observableProto, Scheduler;

    return {
        setters: [function (_Subject) {
            Subject = _Subject['default'];
        }, function (_schedulersVirtualTimeScheduler) {
            VirtualTimeScheduler = _schedulersVirtualTimeScheduler['default'];
        }, function (_schedulersTestScheduler) {
            TestScheduler = _schedulersTestScheduler['default'];
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }, function (_schedulersNextTick) {
            nextTick = _schedulersNextTick['default'];
        }, function (_Observable) {
            Observable = _Observable['default'];
        }, function (_Subscriber) {
            Subscriber = _Subscriber['default'];
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_Notification) {
            Notification = _Notification['default'];
        }, function (_subjectsReplaySubject) {
            ReplaySubject = _subjectsReplaySubject['default'];
        }, function (_subjectsBehaviorSubject) {
            BehaviorSubject = _subjectsBehaviorSubject['default'];
        }, function (_observablesConnectableObservable) {
            ConnectableObservable = _observablesConnectableObservable['default'];
        }, function (_observablesArrayObservable) {
            ArrayObservable = _observablesArrayObservable['default'];
        }, function (_observablesDeferObservable) {
            DeferObservable = _observablesDeferObservable['default'];
        }, function (_observablesEmptyObservable) {
            EmptyObservable = _observablesEmptyObservable['default'];
        }, function (_observablesErrorObservable) {
            ErrorObservable = _observablesErrorObservable['default'];
        }, function (_observablesInfiniteObservable) {
            InfiniteObservable = _observablesInfiniteObservable['default'];
        }, function (_observablesIntervalObservable) {
            IntervalObservable = _observablesIntervalObservable['default'];
        }, function (_observablesPromiseObservable) {
            PromiseObservable = _observablesPromiseObservable['default'];
        }, function (_observablesRangeObservable) {
            RangeObservable = _observablesRangeObservable['default'];
        }, function (_observablesTimerObservable) {
            TimerObservable = _observablesTimerObservable['default'];
        }, function (_observablesFromEventPatternObservable) {
            FromEventPatternObservable = _observablesFromEventPatternObservable['default'];
        }, function (_observablesFromEventObservable) {
            FromEventObservable = _observablesFromEventObservable['default'];
        }, function (_observablesForkJoinObservable) {
            ForkJoinObservable = _observablesForkJoinObservable['default'];
        }, function (_observablesFromObservable) {
            FromObservable = _observablesFromObservable['default'];
        }, function (_operatorsConcatStatic) {
            concat = _operatorsConcatStatic['default'];
        }, function (_operatorsConcat) {
            concatProto = _operatorsConcat['default'];
        }, function (_operatorsConcatAll) {
            concatAll = _operatorsConcatAll['default'];
        }, function (_operatorsConcatMap) {
            concatMap = _operatorsConcatMap['default'];
        }, function (_operatorsConcatMapTo) {
            concatMapTo = _operatorsConcatMapTo['default'];
        }, function (_operatorsMerge) {
            mergeProto = _operatorsMerge['default'];
        }, function (_operatorsMergeStatic) {
            merge = _operatorsMergeStatic['default'];
        }, function (_operatorsMergeAll) {
            mergeAll = _operatorsMergeAll['default'];
        }, function (_operatorsFlatMap) {
            flatMap = _operatorsFlatMap['default'];
        }, function (_operatorsFlatMapTo) {
            flatMapTo = _operatorsFlatMapTo['default'];
        }, function (_operatorsSwitchAll) {
            switchAll = _operatorsSwitchAll['default'];
        }, function (_operatorsSwitchLatest) {
            switchLatest = _operatorsSwitchLatest['default'];
        }, function (_operatorsSwitchLatestTo) {
            switchLatestTo = _operatorsSwitchLatestTo['default'];
        }, function (_operatorsExpand) {
            expand = _operatorsExpand['default'];
        }, function (_operatorsDo) {
            _do = _operatorsDo['default'];
        }, function (_operatorsMap) {
            map = _operatorsMap['default'];
        }, function (_operatorsMapTo) {
            mapTo = _operatorsMapTo['default'];
        }, function (_operatorsToArray) {
            toArray = _operatorsToArray['default'];
        }, function (_operatorsCount) {
            count = _operatorsCount['default'];
        }, function (_operatorsScan) {
            scan = _operatorsScan['default'];
        }, function (_operatorsReduce) {
            reduce = _operatorsReduce['default'];
        }, function (_operatorsStartWith) {
            startWith = _operatorsStartWith['default'];
        }, function (_operatorsTake) {
            take = _operatorsTake['default'];
        }, function (_operatorsSkip) {
            skip = _operatorsSkip['default'];
        }, function (_operatorsSkipUntil) {
            skipUntil = _operatorsSkipUntil['default'];
        }, function (_operatorsTakeUntil) {
            takeUntil = _operatorsTakeUntil['default'];
        }, function (_operatorsFilter) {
            filter = _operatorsFilter['default'];
        }, function (_operatorsDistinctUntilChanged) {
            distinctUntilChanged = _operatorsDistinctUntilChanged['default'];
        }, function (_operatorsDistinctUntilKeyChanged) {
            distinctUntilKeyChanged = _operatorsDistinctUntilKeyChanged['default'];
        }, function (_operatorsCombineLatest) {
            combineLatestProto = _operatorsCombineLatest['default'];
        }, function (_operatorsCombineLatestStatic) {
            combineLatest = _operatorsCombineLatestStatic['default'];
        }, function (_operatorsCombineAll) {
            combineAll = _operatorsCombineAll['default'];
        }, function (_operatorsWithLatestFrom) {
            withLatestFrom = _operatorsWithLatestFrom['default'];
        }, function (_operatorsZip) {
            zipProto = _operatorsZip['default'];
        }, function (_operatorsZipStatic) {
            zip = _operatorsZipStatic['default'];
        }, function (_operatorsZipAll) {
            zipAll = _operatorsZipAll['default'];
        }, function (_operatorsPublish) {
            publish = _operatorsPublish['default'];
        }, function (_operatorsPublishBehavior) {
            publishBehavior = _operatorsPublishBehavior['default'];
        }, function (_operatorsPublishReplay) {
            publishReplay = _operatorsPublishReplay['default'];
        }, function (_operatorsMulticast) {
            multicast = _operatorsMulticast['default'];
        }, function (_operatorsObserveOn) {
            observeOn = _operatorsObserveOn['default'];
        }, function (_operatorsSubscribeOn) {
            subscribeOn = _operatorsSubscribeOn['default'];
        }, function (_operatorsPartition) {
            partition = _operatorsPartition['default'];
        }, function (_operatorsToPromise) {
            toPromise = _operatorsToPromise['default'];
        }, function (_operatorsDefaultIfEmpty) {
            defaultIfEmpty = _operatorsDefaultIfEmpty['default'];
        }, function (_operatorsMaterialize) {
            materialize = _operatorsMaterialize['default'];
        }, function (_operatorsCatch) {
            _catch = _operatorsCatch['default'];
        }, function (_operatorsRetry) {
            retry = _operatorsRetry['default'];
        }, function (_operatorsRetryWhen) {
            retryWhen = _operatorsRetryWhen['default'];
        }, function (_operatorsRepeat) {
            repeat = _operatorsRepeat['default'];
        }, function (_operatorsFinally) {
            _finally = _operatorsFinally['default'];
        }, function (_operatorsTimeout) {
            timeout = _operatorsTimeout['default'];
        }, function (_operatorsTimeoutWith) {
            timeoutWith = _operatorsTimeoutWith['default'];
        }, function (_operatorsGroupBy) {
            groupBy = _operatorsGroupBy['default'];
        }, function (_operatorsWindow) {
            window = _operatorsWindow['default'];
        }, function (_operatorsWindowWhen) {
            windowWhen = _operatorsWindowWhen['default'];
        }, function (_operatorsWindowToggle) {
            windowToggle = _operatorsWindowToggle['default'];
        }, function (_operatorsWindowTime) {
            windowTime = _operatorsWindowTime['default'];
        }, function (_operatorsWindowCount) {
            windowCount = _operatorsWindowCount['default'];
        }, function (_operatorsDelay) {
            delay = _operatorsDelay['default'];
        }, function (_operatorsThrottle) {
            throttle = _operatorsThrottle['default'];
        }, function (_operatorsDebounce) {
            debounce = _operatorsDebounce['default'];
        }, function (_operatorsBuffer) {
            buffer = _operatorsBuffer['default'];
        }, function (_operatorsBufferCount) {
            bufferCount = _operatorsBufferCount['default'];
        }, function (_operatorsBufferTime) {
            bufferTime = _operatorsBufferTime['default'];
        }, function (_operatorsBufferToggle) {
            bufferToggle = _operatorsBufferToggle['default'];
        }, function (_operatorsBufferWhen) {
            bufferWhen = _operatorsBufferWhen['default'];
        }, function (_operatorsSample) {
            sample = _operatorsSample['default'];
        }, function (_operatorsSampleTime) {
            sampleTime = _operatorsSampleTime['default'];
        }],
        execute: function () {
            Observable.defer = DeferObservable.create;
            Observable.from = FromObservable.create;
            Observable.fromArray = ArrayObservable.create;
            Observable.fromPromise = PromiseObservable.create;
            Observable.of = ArrayObservable.of;
            Observable.range = RangeObservable.create;
            Observable.fromEventPattern = FromEventPatternObservable.create;
            Observable.forkJoin = ForkJoinObservable.create;
            Observable['throw'] = ErrorObservable.create;
            Observable.empty = EmptyObservable.create;
            Observable.never = InfiniteObservable.create;
            Observable.timer = TimerObservable.create;
            Observable.interval = IntervalObservable.create;
            Observable.fromEvent = FromEventObservable.create;
            observableProto = Observable.prototype;

            Observable.concat = concat;
            observableProto.concat = concatProto;
            observableProto.concatAll = concatAll;
            observableProto.concatMap = concatMap;
            observableProto.concatMapTo = concatMapTo;

            Observable.merge = merge;
            observableProto.merge = mergeProto;
            observableProto.mergeAll = mergeAll;
            observableProto.flatMap = flatMap;
            observableProto.flatMapTo = flatMapTo;
            observableProto.switchAll = switchAll;
            observableProto.switchLatest = switchLatest;
            observableProto.switchLatestTo = switchLatestTo;
            observableProto.expand = expand;

            observableProto['do'] = _do;
            observableProto.map = map;
            observableProto.mapTo = mapTo;
            observableProto.toArray = toArray;
            observableProto.count = count;
            observableProto.scan = scan;
            observableProto.reduce = reduce;
            observableProto.startWith = startWith;

            observableProto.take = take;
            observableProto.skip = skip;
            observableProto.takeUntil = takeUntil;
            observableProto.skipUntil = skipUntil;
            observableProto.filter = filter;
            observableProto.distinctUntilChanged = distinctUntilChanged;
            observableProto.distinctUntilKeyChanged = distinctUntilKeyChanged;

            Observable.combineLatest = combineLatest;
            observableProto.combineLatest = combineLatestProto;
            observableProto.combineAll = combineAll;
            observableProto.withLatestFrom = withLatestFrom;

            Observable.zip = zip;
            observableProto.zip = zipProto;
            observableProto.zipAll = zipAll;

            observableProto.publish = publish;
            observableProto.publishBehavior = publishBehavior;
            observableProto.publishReplay = publishReplay;
            observableProto.multicast = multicast;

            observableProto.observeOn = observeOn;
            observableProto.subscribeOn = subscribeOn;

            observableProto.partition = partition;
            observableProto.toPromise = toPromise;
            observableProto.defaultIfEmpty = defaultIfEmpty;
            observableProto.materialize = materialize;

            observableProto['catch'] = _catch;
            observableProto.retry = retry;
            observableProto.retryWhen = retryWhen;
            observableProto.repeat = repeat;

            observableProto['finally'] = _finally;
            observableProto.timeout = timeout;
            observableProto.timeoutWith = timeoutWith;

            observableProto.groupBy = groupBy;
            observableProto.window = window;
            observableProto.windowWhen = windowWhen;
            observableProto.windowToggle = windowToggle;
            observableProto.windowTime = windowTime;
            observableProto.windowCount = windowCount;

            observableProto.delay = delay;
            observableProto.throttle = throttle;
            observableProto.debounce = debounce;

            observableProto.buffer = buffer;
            observableProto.bufferCount = bufferCount;
            observableProto.bufferTime = bufferTime;
            observableProto.bufferToggle = bufferToggle;
            observableProto.bufferWhen = bufferWhen;

            observableProto.sample = sample;
            observableProto.sampleTime = sampleTime;
            Scheduler = {
                nextTick: nextTick,
                immediate: immediate
            };

            _export('Subject', Subject);

            _export('Scheduler', Scheduler);

            _export('Observable', Observable);

            _export('Subscriber', Subscriber);

            _export('Subscription', Subscription);

            _export('ReplaySubject', ReplaySubject);

            _export('BehaviorSubject', BehaviorSubject);

            _export('ConnectableObservable', ConnectableObservable);

            _export('Notification', Notification);

            _export('VirtualTimeScheduler', VirtualTimeScheduler);

            _export('TestScheduler', TestScheduler);
        }
    };
});